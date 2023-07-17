import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getArticles } from './api'
import axios from 'axios'


export const defaultURL = axios.create({
  baseURL : 'https://nc-news-production.onrender.com/api'
})

function App() {

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
    <main id='gridContainer'>
      <nav id='nav'>
        <h1>Home Page</h1>
      </nav>
      <section id='trending'>
        <h1>why wont thsi workd</h1>
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

  return articles.map((article) => {
    console.log(article)
        return ( 
         <div>
          <h2>{article.title}</h2>
          <p>{article.topic}</p>
          <p>{article.author}</p>
         </div>
            
            
       )
      })
}


export default App
