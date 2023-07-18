import React from 'react'
import { useState, useEffect } from 'react'
import { getArticles} from '../api'
import { Link } from 'react-router-dom'



export default function () {

    const [trending, setTrending] = useState(true)
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

  
    useEffect(() => {
      getArticles().then((response) => {
        setArticles(response)
      })
      .then(()=>{
        setLoading(false)
      })
    }, [])



    return loading ? <p>Loading...</p> : (
        <main id='mainContainer'>
          <section id='trending'>
            <header>
                <h2>View Articles</h2>
            </header>
            <button className='trendall' onClick={(event) => {
                setTrending(true)
            }}>Trending</button>
            <button className='trendall' onClick={(event) => {
                setTrending(false)
            }}>All Articles</button>
            <hr />
            <ul>
              <RetrieveArticles trending={trending} articles={articles}/>
            </ul>
          </section>
          <section id='search'>
    
          </section>
          <section id='post'>
    
          </section>
          
        </main>
      )
}

function RetrieveArticles(props) {
    const trending = props.trending
    const articles = props.articles
    
    if (trending === true) {
        const filterTrending = articles.filter((article) => {
                return article.comment_count > 10
              })
        return filterTrending.map((article) => {
                return ( 
                  <div className='article'>
                    <Link to={`/articles/${article.article_id}`}>
                    <h2>{article.title}</h2>
                  </Link>
                    <p>Author : {article.author}</p>
                    <p>Topic : {article.topic}</p>
                    <p>Comments : {article.comment_count}</p>
                  
                    <p>Article ID : {article.article_id}</p>
          
                 </div>
           
               )
              })
    }
    else {
        return articles.map((article) => {
            console.log(article)
                return ( 
                <Link to={`/articles/${article.article_id}`}>
                  <div className='article'>
                  <h2>{article.title}</h2>
                  <p>Author : {article.author}</p>
                  <p>Topic : {article.topic}</p>
                  <p>Comments : {article.comment_count}</p>
                 </div>
                </Link>
                    
                    
               )
              })
    }
  
  }