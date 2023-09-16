//index.js
//importing the react and react-dom package
import React from 'react';
import ReactDOM from 'react-dom';
import codding from './img/pexels-photo-6424589.jpeg'
//To get the root element from the HTML document

//inline css styles
// const headerStyles = {
//   backgroundColor: '#61DBFB',
//   fontFamily: 'Helvetica Neue',
//   padding: 25,
//   lineHeight: 1.5,
// }

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'


//jsx element, header
const header=(
  <header>
    <div className='header-wrappre'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  
  </header>
)

//inline css styles
// const mainStyles = {
//   backgroundColor: '#F3F0F5',
// }


const numOne=3
const numTwo=2

const result=(
  <p>
    {numOne}+{numTwo}={numOne+numTwo}
  </p>
)

const yearBorn=1820
const currentYear=new Date().getFullYear()
const age=currentYear-yearBorn
const personAge=(
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

//jsx element, main
const techs=['HTML','CSS','Javascript']
const techsFormatted=techs.map((tech)=> <li>{tech}</li>)

//jsx element, main
const main=(
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>{techsFormatted}
      </ul>
      {result}
      {personAge}
    </div>
     
  </main>
)

const user=(
  <div className='image1'>
    <img src={codding} alt="" />
  </div>
)

//inline css styles
// const footerStyles = {
//   backgroundColor: '#61DBFB',
// }

//jsx element, footer
const footer=(
  <footer>
    <div className='footer-wrapper'>
    <p>Copyright 2020</p>
    </div>
  </footer>
)

//jsx element, app, a container or a parent
const app=(
  <div>
    {header}
    {main}
    {user}
    {footer}
  </div>
)





// const jsxElement=<h1>This is JSX element</h1>
const rootElement=document.getElementById('root')
//we render the jsx element using the ReactDom package
//ReactDom has the render method and render method takes two arguments
ReactDOM.render(app,rootElement)
//ReactDom.render([header,main,footer],rootElement)