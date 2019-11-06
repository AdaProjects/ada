import React from 'react';
// import NewsDisplay from './NewsDisplay.jsx'

const Article = props => {
  return (
    <div>
      <p>
      {props.item.title}
      </p>
      <p>
      {props.item.author}
      </p>
    </div>
  )
}

export default Article;