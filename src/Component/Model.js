import React from "react";

class Model extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand : "Umair",
            model : "Suzuki",
            color: "red",
            year: "1996"
        
        }
    }

    shouldComponentUpdate() {
        return true;
    }
    changeColor =() =>{
        this.setState({color: "blue"});
    }

    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <h2>My {this.state.brand}</h2>
                <p> My bike is {this.state.model} and {this.state.color} is my favorite from {this.state.year}</p>
                <button onClick={this.changeColor}>Submit</button>
            </div>
        )
    }
}
export default Model;