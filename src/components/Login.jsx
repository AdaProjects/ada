import * as React from 'react';

// will have a sign in form, and can conditionally render "sign up" prompts.
const Login = () => {
  const API_URL = 'https://github.com/login/oauth/authorize?';
  const CLIENT = `client_id=${process.env.GITHUB_CLIENT_ID}`;
  const REDIRECT = '&redirect_uri=http://localhost:8080/oauth/redirect';
  console.log('client id', process.env.GITHUB_CLIENT_ID)
  return (
    <div className="main">
      <h2>ADA</h2>
      <a className="login-text" href='https://github.com/login/oauth/authorize?client_id=d250196ebf8a8e57e660'>
      Login with github
      </a>
    </div>
  );
};

export default Login;
