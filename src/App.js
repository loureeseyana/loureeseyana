import React, { Component } from 'react';
import './App.css';
import './styles/style.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about';
import Timeline from './components/experience'
import MainSection from './components/main-section';
import Header from './components/header';
import Services from './components/services';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div>
          <MainSection></MainSection>
          <Header></Header>
          <About></About>
         	<Services></Services> 
          <Contact></Contact>
      </div>
    );
  }
}

export default App;
