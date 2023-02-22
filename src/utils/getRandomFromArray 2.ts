
export const getRandomUrl = (arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)]
}