// will display news feed upon navigation to the page.

import React, { Component } from 'react';
import Article from './Article.jsx'

class NewsDisplay extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    }
  }

  componentDidMount ()  {
    console.log('in getNews')
    fetch('/getNews', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log('this is the response: ', res)
      let resArr = Object.entries(res.articles)
      console.log('outside the loop and resArr is ', resArr)
      let articlesArr = [];
      for (let i = 0; i < resArr.length; i++) {
        console.log('in the loop')
        let articleTitle = resArr[i][1]
        articlesArr.push(articleTitle)
      }
      this.setState({news: articlesArr})
      })
  }

  render() {
      let articles = this.state.news.map((cur, idx) => {
        return (
          <Article key = {idx}
          item = {cur}
          />
        )
      })
    return (
      <div>
        <p>We in this NewsDisplay component y'all!</p>
        <div>
          {articles}
        </div>
      </div>
    )
  }
}

export default NewsDisplay;