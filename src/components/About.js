

import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
function About(props) {
  return (
    <>
      <LoadingBar
  height={3}
  color='#f11946'
  progress={0}
/>
       <div class="row">
  <div class="col-4">
    <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav class="nav nav-pills flex-column">
        <a class="nav-link" href="#item-1">Item 1</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
          <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
        </nav>
        <a class="nav-link" href="#item-2">Item 2</a>
        <a class="nav-link" href="#item-3">Item 3</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
          <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
        </nav>
      </nav>
    </nav>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
      <div id="item-1">
        <h4>Item 1</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, culpa!</p>
      </div>
      <div id="item-1-1">
        <h5>Item 1-1</h5>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div id="item-1-2">
        <h5>Item 1-2</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id expedita quas perferendis iste. Vitae dicta commodi maiores doloremque itaque.</p>
      </div>
      <div id="item-2">
        <h4>Item 2</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse optio quasi ullam maiores itaque!</p>
      </div>
      <div id="item-3">
        <h4>Item 3</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse odio assumenda enim fugiat impedit! Consequatur recusandae iure architecto?</p>
      </div>
      <div id="item-3-1">
        <h5>Item 3-1</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis facilis rem possimus officiis a iusto officia? Consequatur iusto, aperiam adipisci expedita suscipit ipsam ex doloremque.</p>
      </div>
      <div id="item-3-2">
        <h5>Item 3-2</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis facilis rem possimus officiis a iusto officia? Consequatur iusto, aperiam adipisci expedita suscipit ipsam ex doloremque.</p>
      </div>
    </div>
  </div>
  </div>
  <LoadingBar
  height={3}
  color='#f11946'
  progress={100}
/>
  
  </>
  )
}

export default About

