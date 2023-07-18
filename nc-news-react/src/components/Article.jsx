import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle } from '../api'




export default function (props) {
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const currentId = useParams()



    useEffect(() => {
        getArticle(currentId).then((response) => {
          setArticle(response)
        })
        .then(()=>{
          setLoading(false)
        })
      }, [article])


  return loading ? <p>Loading...</p> : (
    <div id='singleArticle'>
      <h2>{article[0].title}</h2>
      <img src={article[0].article_img_url} alt="Article Cover Art" />
      <h3>{article[0].body}</h3>
    </div>
  )
}
