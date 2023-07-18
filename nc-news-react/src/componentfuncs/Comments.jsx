import React from 'react'

export function RetrieveComments (props) {
    const comments = props.comments
    const showing = props.show
    if(showing){
    return comments.map((comment) => {
      return <li key={comment.comment_id}>
        <h2>{comment.author}</h2>
        <p>"{comment.body}"</p>
      </li>
    })
  }
  else {
    return 
  }
}
  

