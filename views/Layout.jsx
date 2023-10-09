const React = require('react');
const Navbar=require('../views/Navbar')

function Layout({title, children, user}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <Navbar user={user} />
      </head>
      <title>{title}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />
    
      <script defer src="/js/registration.js"/>
      <script defer src="/js/login.js"/>
      <script defer src="/js/addNewPost.js"/>
      <script defer src="/js/profilePostAdd.js"/>
      <script defer src="/js/deletePost.js"/>
      <script defer src="/js/updatePost.js"/>
      <script defer src="/js/likes.js"/>
      

      <body style={{'backgroundColor':'#F8EAED'}}>
        {children}
      </body>
    </html>
  );
}
module.exports = Layout;
