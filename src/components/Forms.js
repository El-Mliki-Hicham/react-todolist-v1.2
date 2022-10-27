import React from "react";

class Form extends React.Component{

state={
    name:'',
    id:""
}
handleSubmit=(e)=>{
    e.preventDefault()
    this.setState({
       name: this.state.name,
        id: Math.random()
    })
}

 handleChnage=(e)=>{
    this.setState({
        name: e.target.value,
         id: Math.random()
     })
    console.log(e.target.value)
    console.log(this.state)
}
    render(){

        return(
        <div>


            <h1>{this.state.name}</h1>
            <h1>{this.state.id}</h1>
            <form onSubmit={this.handleSubmit}>
           name <input name="name"  onChange={this.handleChnage}></input>
           <button>add new</button>
           </form>
        </div>
        )
    }
}
export default Form 