// will display news feed upon navigation to the page.
import React, { Component } from 'react';
import Article from './Article.jsx'

class NewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    }
  }

  componentDidMount ()  {
    fetch('/getNews', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.json();
    })
    .then(res => {
      let articlesArr = JSON.parse(res);
      let articles = [];
      for (let i = 0; i < articlesArr.length; i++) {
        let article = articlesArr[i];
        articles.push(article);
      }
      this.setState({news: articles});
    });
  };

  render() {
      let articles = this.state.news.map((cur, idx) => {
        return (
          <Article
            key={idx}
            item={cur}
          />
        )
      })
    return (
      <div className="article-container">
          {articles}
      </div>
    )
  }
}

export default NewsContainer;
