// will display news feed upon navigation to the page.

import React, { Component } from 'react';

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

      let articleArr = Object.entries(res.articles)
      console.log('outside the loop and articleArr is ', articleArr)

      for (let i = 0; i < articleArr.length; i++) {
        console.log('in the loop')
        let article = articleArr[i][1].title
        console.log('this is the article: ', article)
        this.state.news.push(article)
        }
        console.log('this is this.state.news: ', this.state.news)
        // for (let i = 0; i < this.state.news.length; i++) {
        //   let singleTitle =
        //   singleTitle.innerHTML =
        // }
        let newsArray = this.state.news
        console.log('this is the newsArray', newsArray)
        // return newsArray
      })
  }

  render() {
    return (
      <div>
        <p>We in this NewsDisplay component y'all!</p>
        {/* {newsArray} */}
      </div>
    )
  }
}

export default NewsDisplay;
