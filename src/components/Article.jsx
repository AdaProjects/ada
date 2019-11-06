import React from 'react';
// import NewsDisplay from './NewsDisplay.jsx'

const Article = props => {
  return (
    <div className="article">
      <img src={props.item.urlToImage} alt="no image available"/>
      <div className="article-text">
        <h1>
          <a href={props.item.url} target="_blank">{props.item.title}</a>
        </h1>
        <p>
         by {props.item.author}
        </p>
        <p>
         {props.item.description}
        </p>
      </div>
    </div>
  )
}

export default Article;
