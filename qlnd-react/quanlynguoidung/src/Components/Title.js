import React, { Component } from 'react';
// import Login from './Login';

class Title extends Component {
    render(){
      // const { onLogin } = this.props;
      return (
        <div className="Title">
            <div className="row">
              <h1 style={{textAlign: 'center', padding: '10px'}} className="col-md-6">Quản Lý Người Dùng</h1>    
            </div>
        </div>
      );
    }
  }
  
  export default Title;