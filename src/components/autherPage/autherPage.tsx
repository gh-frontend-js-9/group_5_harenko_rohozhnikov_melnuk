import React from 'react'
import './autherPage.scss'
import Header from './Header/header'
import Footer from './Footer/footer'
import Bredcrumb from './Bredcrumb/bredcrumb'
import Posts from './Posts/post'
import Saidebar from './Saidebar/saidebar'

function App() {
  return (
    <>
      <div className="container">
        <Header  style="display: block"/>
        <Bredcrumb />
      </div>
      <main className="main container flex-sa">
          <Posts />
          <Saidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;