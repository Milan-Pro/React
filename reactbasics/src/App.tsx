import React from 'react';
import logo from './logo.svg';
import './App.css';

import { JSXDemo } from  "./JSXDemo";

import { Products } from  "./Products";
import RenderDemo from './RenderDemo';

function App() {

  return (
      //React.fragment or use <>,</>
      <React.Fragment> 

      <div className="App">
        <Products />
      </div>

      <div className="App">
        <JSXDemo />
      </div>

      <div>
        <RenderDemo flag={true} hide={ false } show={ true } />
      </div>
      
      </React.Fragment>
    )
}

export default App;