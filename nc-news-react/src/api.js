import axios from 'axios'

const defaultURL = axios.create({
    baseURL : 'https://nc-news-production.onrender.com/api'
  })

export const getArticles = () => {
    return defaultURL.get('/articles').then(({data}) => {
        return data.articles
    })
}

export const getArticle = (id) => {

    return defaultURL.get(`/articles/${id.article_id}`).then(({data}) => {
        
        return data.articles
    })
}