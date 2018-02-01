import React, { Component } from 'react';
import Footer from './Components/Footer';
import DirectLink from './Components/DirectLink';
import Buttons from './Components/Buttons';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    componentDidMount(){
    const ele = document.getElementById('loader')
    if(ele){
      setTimeout(() => {
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 2000)
      }, 1000)
    }
}

  render() {
    return (
      <div className="App">
      <section className='section'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Buttons/>
        <DirectLink/>
      </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
