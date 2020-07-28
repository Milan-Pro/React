import * as React from "react";

export interface ICounterProps {
    initial: number;
    book: IBook; // interface to set hook state
}
//use state React hook demo
//set state with hook
interface IBook {
    id: number;
    name: string;
}

//functional component using reasct hook to rerender component
// <Counter initial={ 1 } />
export function Counter(props: ICounterProps) : JSX.Element {
    //set element
    let [count,setCount] = React.useState(props.initial);
    //interface element
    let [book,setBook] = React.useState(props.book);

    return <div>
        Count: { count } <br/>
        Book Info : <br/>
        { book.id } : { book.name }<br/>

        <input type="button" value="Change" onClick={ () => {
            setCount(count+1);

            let newName = "Sample book: " + new Date().getTime();

            setBook({
                name: newName,
                id: book.id
            });

            console.log("Count=" + count);
        }} />
    </div>;
}