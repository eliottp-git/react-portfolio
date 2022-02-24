import React from 'react';
import ReactDOM from 'react-dom';

// -- PROJECT 1 -- //
// import Header from './project-1/components/Header'
// import MainContent from './project-1/components/MainContent'
// import './project-1/css/style.css';
// function App() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//     </div>
//   )
// }

// -- PROJECT 2 -- //
// import BusinessCard from './project-2/components/BusinessCard'
// import './project-2/css/p2-style.css';

// function App() {
//   return (
//     <div>
//       <BusinessCard />
//     </div>
//   )
// }

// -- PROJECT 3 -- //
import './project-3/css/style.css'
import Page from './project-3/components/Page.js'

function App() {
  return (
    <div>
      <Page />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);