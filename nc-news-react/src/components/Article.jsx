import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle, getComments } from '../api'




export default function (props) {
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [showComments, setShow] = useState(false)
    const [loading, setLoading] = useState(true)

    const currentId = useParams()



    useEffect(() => {
        getArticle(currentId).then((response) => {
          setArticle(response)
        })
        .then(() => {
          getComments(currentId).then((response) => {
            setComments(response)
          })
        })
        .then(()=>{
          setLoading(false)
        })
      }, [])


  return loading ? <p className='loader'>Loading...</p> : (
    <div id='singleArticle'>
      <div id='articleimg'>
      <h2>{article[0].title}</h2>
      <img src={article[0].article_img_url} alt="Article Cover Art" />
      </div>
      <div id='articlebody'>
      <h3>{article[0].body}</h3>
      </div>
      

      <div id='comments'>
        <button id='commentsbutton' onClick={(event) => {
          console.log('click')
          setShow(prevShow => !prevShow)
        }}><ButtonSwitch show={showComments}/></button>
        <RetrieveComments comments={comments} show={showComments}/>
      </div>
    </div>
  )
}


function RetrieveComments(props) {
  const comments = props.comments
  const showing = props.show
  if(showing){
    return comments.map((comment) => {
      return <li>
        <h2>{comment.author}</h2>
        <p>{comment.body}</p>
      </li>
    })
  }
  else {
    return 
  }
}

function ButtonSwitch(props){
  const showing = props.show
  if(showing){
    return 'Hide Comments'
  }
  else return 'Show Comments'
}