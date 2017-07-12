import React, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Intro from './components/side_text'
import Form from './components/form'
import Button from './components/button'

class App extends Component {
  render() {
    return (<div className='tc helvetica'>
            <Header />
            <Footer />
            <div className ='dt mw8 pt0 pb5 pv5-m pv6-ns'>
            <Intro />
            <Form />
            <Button />
            </div>
            </div>
  );
}
}

export default App
