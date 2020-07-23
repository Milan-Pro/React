//State, Prop demo and handle event demo
import React, { Component } from 'react';

interface IProps {
    rollNo: number;
}
interface IState{
    name: string;
    studentid: number;
}
export class Student extends React.Component<IProps,IState>{
    //super is require to call parent class constructor
        //The super keyword refers to the parent class.
        // It is used to call the constructor of the parent class and to access the parent's properties and methods.
    constructor(props:IProps){
        super(props);
        this.state={
            name: "Milan",
            studentid: this.props.rollNo
        }
    }
    handleClick = ()=>{
        console.log("Click here",this) //to use this inside handle click always use arrow function
    }
    render(){
        return(
        <React.Fragment>
        <button  onClick={this.handleClick}>Click Here</button>
        <div> 
            <h1>This is {this.state.name}</h1>
            <h2>My student id is {this.state.studentid}</h2>
        </div>
        </React.Fragment>        
        )
    }
}

export default Student;





