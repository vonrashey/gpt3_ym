import React from 'react'

import { Blog, Header, Possibility, Footer, Features, WhatGPT3 } from './containers'
import { Article, CTA, Brand, Feature, Navbar } from './componets';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
<Brand/>
<WhatGPT3/>
<Features/>
<Possibility/>
<CTA/>
<Blog/>
<Footer/>
  </div>
  )
}

export default App