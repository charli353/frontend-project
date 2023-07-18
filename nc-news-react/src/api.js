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

export const getComments = (id) => {
    return defaultURL.get(`/articles/${id.article_id}/comments`).then(({data}) => {
        
        return data.comments
    })
}   

export const updateVotes = (id, liked) => {
    
    if(!liked){

        return defaultURL.patch(`/articles/${id.article_id}`, {inc_votes : + 1}).then(({data}) => {
            console.log(data)
            return data
        })
    }
    else {
        return defaultURL.patch(`/articles/${id.article_id}`, {inc_votes : - 1}).then(({data}) => {


            return data
        })
    }
}