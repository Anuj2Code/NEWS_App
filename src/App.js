import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  state={
  progress:0,
  }
  setprogress = (progress)=>{
    this.setState({progress:progress})
   }
  render() {
    return (
     <>
       <BrowserRouter>
       <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
       <Routes>
        <Route exact path='/sci' element={<News key="science" setprogress={this.setprogress}  pageSize={8}  category="Science"/>} ></Route>
        <Route  index element={<News key="gen" setprogress={this.setprogress}  pageSize={8} category="General" />} ></Route>
        <Route exact path='/new' element={<News key="gen" setprogress={this.setprogress}  pageSize={8}  category="General"/>} ></Route>
        <Route exact path='/enter' element={<News key="entre" setprogress={this.setprogress}  pageSize={8}  category="Entertainment"/>} ></Route>
        <Route exact path='/buss' element={<News key="bus" setprogress={this.setprogress}  pageSize={8}  category="Business"/>} ></Route>
        <Route exact path='/spo' element={<News key="sports" setprogress={this.setprogress}  pageSize={8}  category="Sports"/>} ></Route>
        <Route exact path='/tech' element={<News key="techno" setprogress={this.setprogress}  pageSize={8}  category="Technology"/>} ></Route>
        <Route exact path='/about' element={<About />}></Route>
       </Routes>
       </BrowserRouter>
        </>
    )
  }
}