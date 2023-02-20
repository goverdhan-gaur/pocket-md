import type { NextApiRequest, NextApiResponse } from 'next'
import rateLimit from 'express-rate-limit'
import slowDown from 'express-slow-down'

const getIP = request =>
    request.ip ||
    request.headers['x-forwarded-for'] ||
    request.headers['x-real-ip'] ||
    request.connection.remoteAddress

const limit = 5
const windowMs = 2
const delayAfter = Math.round(limit / 2)
const delayMs = 500

const middlewares = [
    slowDown({ keyGenerator: getIP, windowMs, delayAfter, delayMs }),
    rateLimit({ keyGenerator: getIP, windowMs, max: limit }),
]

export const applyMiddleware = middleware => (request: NextApiRequest, response: NextApiResponse) =>
    new Promise((resolve, reject) => {
        middleware(request, response, result =>
            result instanceof Error ? reject(result) : resolve(result)
        )
    })

export async function applyRateLimit(request: NextApiRequest, response: NextApiResponse) {
    await Promise.all(
        middlewares
            .map(applyMiddleware)
            .map(middleware => middleware(request, response))
    )
}
