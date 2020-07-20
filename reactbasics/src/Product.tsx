import * as React from 'react';

import "./App.css";
import { IProduct } from "./common/IProduct";

interface IProductProps {
    item: IProduct
}

/*Function Component
1)does not require react React.Component
2)does not require state
3)light weight compare to class
4)faster then class component
5)Life cycle method can be possible with react hooks
6)
*/
export const Product = (props:IProductProps) =>{
        //Do somethiing before render

        //Render
        return <div className="product">
            { props.item.id } <br/>
            { props.item.name }  <br/>
            { props.item.cat } <br/>
            { props.item.price } &nbsp;

        </div>;
}