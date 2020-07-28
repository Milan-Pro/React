import React from 'react';
//import logo from './logo.svg';
import './App.css';

//import { JSXDemo } from  "./JSXDemo";

//import { Products } from  "./Products";
//import RenderDemo from './RenderDemo';
//import { Register } from'./Register';
//import { Invoices } from "./Invoices";
//import { InvoiceProvider } from "./InvoiceProvider";
//import { StateDemo } from './StateDemo';
//import { Student } from './StudentComponent'
//import { countReset } from 'console';
import { Counter } from './Counter';
import { Contacts } from "./Contacts";

function App() {

  /* return (
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
    //React Form Demo
    return (
      <div className="App">
        <Register />
      </div>
    );
     */

    /* let provider = new InvoiceProvider();

  provider.addInvoice({
    invno: 1001,
    invdate:new Date(),
    customer:"XYZ",
    amount: 2000
  });

  provider.addInvoice({
    invno: 1002,
    invdate:new Date(),
    customer:"XYZ",
    amount: 5000
  });

  return (
    <div className="App">
      <Invoices provider={ provider } />
    </div>
  ); */

  //state demo
  /* return (
    <React.Fragment>
    <div className="App">
      <StateDemo info="This is info (message)" />
    </div>
    <div>
      <Student rollNo={101}/>
    </div>
    </React.Fragment>
  ); */
  
  //React hook demo 
  //use state React hook demo
  let b = {
    id :1,
    name: "Sample-book"
  }
  return (
    <div className="App">
      {/*passing the object book inline
      <Counter initial={ 10 } book={{ 
        id: 1,
        name: "Sample book"
      }} /> */}
      {/*passing the object book through variable b*/}
      <Counter initial={ 10 } book={b} />

      <div className="App">
      <Contacts />
      </div>
    </div>
  );
  
}

export default App;