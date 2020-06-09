import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header-component';
import Midesection from './midsection-component';
import Sidesection from './sidesection-component';
import Footer from './footer-component'

function App() {
  return (
    <div style={{padding:'50px'}}>
      <Header/>
      <div style={{display:'flex', flexWrap:'wrap', height:'200px', width:'800px'}}>
        <Midesection name='AC'/>
        <Midesection name='+/-'/>
        <Midesection name='%'/>
        <Sidesection name='/'/>
        <Midesection name='7'/>
        <Midesection name='8'/>
        <Midesection name='9'/>
        <Sidesection name='x'/>
        <Midesection name='4'/>
        <Midesection name='5'/>
        <Midesection name='6'/>
        <Sidesection name='-'/>
        <Midesection name='1'/>
        <Midesection name='2'/>
        <Midesection name='3'/>
        <Sidesection name='+'/>
      </div>
      <div style={{display:'flex',height:'50px', width:'100%'}}>
        <Footer/>
        <Midesection name='.'/>
        <Sidesection name='='/>
      </div>
    </div>
  );
}

export default App;
