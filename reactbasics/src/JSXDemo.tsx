import React from 'react';
import "./App.css";
//Ways to create JSX 
//(1) Directly creat const and assign value html
//(2) create through JSX.Element
//(3) function which return JSX element

//(1)
const newElement = <div> hi  
                            <span>
                                New Element
                            </span>
                    </div>;

//(2)
const greeting : string = 'Hello World!';

const hello : JSX.Element = <span>{ greeting }</span>;

const output : JSX.Element = <div className="heading1">
                                { hello } <br/>
                                <span>Hi</span>
                                <span> {newElement} </span>
                                { Show(true) }
                                { List(['John','Abdul','Sita','Ramesh']) }
                                { QuickList(['Milan','Ted','Ron','Jiya']) }
                            </div>;

//(3)
function Show(showTime: boolean) : JSX.Element {
    if(showTime)
        return <div>{ new Date().toTimeString() } </div>;

    return <div>{ new Date().toDateString() } </div>;
}
/*
    { List(['name1','name2','name3']) }
    <ul>
        <li>name 1</li>
        <li>name 2</li>
        <li>name 3</li>
    </ul>

*/
//(3)
function List(names: string[]) : JSX.Element {
    let items : JSX.Element[] = [];

    let list : JSX.Element = <ul>
        { items }
    </ul>;

    names.forEach((n: string) => {
        let li = <li>{ n }</li>;
        items.push(li);
    });

    return list;
}

//(3)
function QuickList(names: string[]) : JSX.Element {
    return <ul>
        { names.map(n => <li>{ n }</li>)}
    </ul>;
}


export function JSXDemo() : JSX.Element {
    return output;
}