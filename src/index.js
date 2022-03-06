import React from 'react';
import ReactDOM from 'react-dom';

// import Page from './project-1--react-facts/components/Page/Page.jsx';
// import Page from './project-2--business-cards/components/Page/Page'
// import Page from './project-3--city-experiences/components/Page/Page'
// import Page from './project-4--my-movie-db/components/Page/Page'
// import Page from './project-5--meme-generator/components/Page/Page'
// import Page from './project-6--collapsible-navbar/components/Page/Page'
import Page from './project-7--background-transitions/components/Page/Page'

function App() {
  return (
    <>
      <Page />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);