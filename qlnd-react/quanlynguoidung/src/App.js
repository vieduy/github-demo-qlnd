import React, { Component } from 'react';
import Title from './Components/Title';
import List from './Components/List';
import Sidebar from './Components/Sidebar';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  onLogin(newAcc){
    console.log(newAcc);
  }

  render(){
    return (
      <div className="App">
        <Sidebar/>  
        <div id="board">
            {/* TITLE : START */}
            <Title onLogin={this.onLogin}/>
            <hr/>
            {/* FORM : END */}
            {/* LIST : START */}
            <br/>
            <List/>
        </div>
      </div>
    );
  }
}

export default App;
