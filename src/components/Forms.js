import React from "react";

class Form extends React.Component{

    state={
            id:'',
            name:'',
            // input:"",
      }
handleSubmit=(e)=>{
    e.preventDefault()
    this.props.AddItems(this.state)
    // this.setState({
    //    input: this.state.name,
      
    // })
    this.setState({
        name:null
    })
}

 handleChnage=(e)=>{
    this.setState({
        name: e.target.value,
     })
    console.log(e.target.value)
    console.log(this.state)
}
    render(){

        return(
        <div>


            
            <h1>{this.state.input}</h1>
            <form onSubmit={this.handleSubmit}>
           name <input name="name"  onChange={this.handleChnage}></input>
           <button>add new</button>
           </form>
        </div>
        )
    }
}
export default Form 