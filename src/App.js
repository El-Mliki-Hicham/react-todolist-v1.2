import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Form from './components/Forms';
import React from 'react';


class App extends React.Component {

  state={
    data:[
      {id:1,name:'hicham'},
      {id:2,name:'amal'}
    ]
  }

render(){
  return (
  <div>
    <Table data={this.state.data} />
    <br></br>
    <Form  />
  </div>
  );
}
}

export default App;
