import React from 'react'
import Header from './../components/Header'
import Intro from '../components/Intro'
import Search from '../components/Search'
import New from '../components/New'
import Footers from '../components/Footers'

function Home() {
  return (
    <div> 
        <Header />
        <Intro />
        <Search />
        <New />
        <Footers />
    </div>
  )
}

export default Home