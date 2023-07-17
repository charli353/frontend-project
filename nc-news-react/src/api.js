import { defaultURL } from '../src/App'

export const getArticles = () => {
    return defaultURL.get('/articles').then(({data}) => {
        return data.articles
    })
}