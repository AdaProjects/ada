import React from 'react';
// import NewsDisplay from './NewsDisplay.jsx'

const Article = props => {
  return (
    <div>
      <img src={props.item.urlToImage} alt="no image available"/>
      <p>
        <a href={props.item.url}>{props.item.title}</a>
      </p>
      <p>
      {props.item.author}
      </p>
    </div>
  )
}

export default Article;