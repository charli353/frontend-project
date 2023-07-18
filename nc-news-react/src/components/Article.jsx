import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle, getComments, updateVotes } from '../api'
import { RetrieveComments } from '../componentfuncs/Comments'


export default function (props) {
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [showComments, setShow] = useState(false)
    const [loading, setLoading] = useState(true)
    const [likes, setLikes] = useState(0)
    const [liked, setLiked] = useState(localStorage.getItem('likeCondition') === 'true')

    const currentId = useParams()



    useEffect(() => {
        getArticle(currentId).then((response) => {
          setArticle(response)
          setLikes(response[0].votes)
        })
        .then(() => {
          getComments(currentId).then((response) => {
            setComments(response)
          })
        })
        .then(() => {
          localStorage.setItem('likeCondition', JSON.stringify(liked))
        })
        .then(()=>{
          setLoading(false)
        })
      }, [liked])

      console.log(localStorage.getItem("likeCondition"))

  return loading ? <p className='loader'>Loading...</p> : (
    <div id='singleArticle'>
      <div id='articleimg'>
      <h2>"{article[0].title}"</h2>
      <img src={article[0].article_img_url} alt="Article Cover Art" />
      </div>
      <div id='articlebody'>
      <h3>{article[0].body}</h3>
      <button id='likebutton' onClick={(event) => {
        updateVotes(currentId, liked).then((response) => {
          setLikes(response.votes)
          setLiked(!liked)
        })
      }}>LIKE : {likes}</button>
      
      </div>
      

      <div id='comments'>
        <button id='commentsbutton' onClick={(event) => {
          setShow(prevShow => !prevShow)
        }}><ButtonSwitch show={showComments}/></button>
        <RetrieveComments comments={comments} show={showComments}/>
      </div>
    </div>
  )
}

function ButtonSwitch(props){
  const showing = props.show
  if(showing){
    return 'Hide Comments'
  }
  else return 'Show Comments'
}