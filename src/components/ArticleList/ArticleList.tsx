import React, { FunctionComponent, useMemo, memo } from 'react'
import * as Styled from './ArticleList.styled'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { Article } from '@/Interfaces/article'
import { ArticleType } from '@/Interfaces/types'
import { AnimatePresence, motion } from 'framer-motion'
interface Props {
  articles: Article[]
  hasLoaded: boolean
  articleType: ArticleType
}

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}
const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
}

export const ArticleList: FunctionComponent<Props> = (props) => {
  const { articles, hasLoaded, articleType } = props

  const memoizedArticles = useMemo(
    () =>
      articles.map((article, index) => (
        <motion.div key={`article__${article.id}_${index}}`} variants={item}>
          <ArticleListItem
            article={article}
            index={index}
            articleType={articleType}
          />
        </motion.div>
      )),
    [articles, articleType]
  )

  return (
    <Styled.wrapper variants={container} animate="show">
      <AnimatePresence>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {memoizedArticles}
        </motion.div>
      </AnimatePresence>
      {!hasLoaded && <Styled.loading />}
    </Styled.wrapper>
  )
}

export default memo(ArticleList)
