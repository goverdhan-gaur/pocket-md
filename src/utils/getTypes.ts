import { Article } from '@/Interfaces/article'

export const getTypes = (articles: Article[]) => {
  const types: string[] = ['All']
  articles.forEach((item: Article) => {
    !types.includes(item.type) && types.push(item.type)
  })
  return types
}
