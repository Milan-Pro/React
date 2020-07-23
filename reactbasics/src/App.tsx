import React from 'react';
//import logo from './logo.svg';
import './App.css';

//import { JSXDemo } from  "./JSXDemo";

//import { Products } from  "./Products";
//import RenderDemo from './RenderDemo';
//import { Register } from'./Register';
//import { Invoices } from "./Invoices";
//import { InvoiceProvider } from "./InvoiceProvider";
import { StateDemo } from './StateDemo';

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

  return (
    <div className="App">
      <StateDemo info="This is info (message)" />
    </div>
  );
  
}

export default App;