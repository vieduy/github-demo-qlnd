import React, { Component } from 'react';
import Item from './Item';
import {Modal, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from './../Actions/index';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showAlert: false,
          showModal: false,
          username: '',
          password: '',
          doihinh: '',
          type: '0'
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){ 
        this.props.onGetUsers();
    }

    close() {
        this.setState({
            showModal: false,
            username: '',
            password: '',
            doihinh: '',
            type: 'Normal User'
        });
    }
    
    closeAlert = () => {
        this.setState({
            showAlert: false
        });
        this.getUsers();
    }

    openAlert = () => {
        this.setState({
            showAlert: true
        });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddUser(this.state);
        this.close();
        this.openAlert();
        this.setState({
            showAlert: false,
            showModal: false,
            username: '',
            password: '',
            doihinh: '',
            type: '0'
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
        });
    }

    render(){
        const { users } = this.props;
        const listUsers = users.map( (user, index) => {
            return <Item username={user.username} password={user.password} doihinh={user.doihinh} type={user.type} key={index} index={index+1} _id={user._id} getUsers={this.getUsers}/>
        });
      return (
            <div className="table-wrapper">
              <div className="table-title">
                  <div className="row">
                  <div className="col-sm-6">
                      <h2>User <b>Management</b></h2>
                  </div>
                  <div className="col-sm-6">
                      <button onClick={this.open} className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Employee</span></button>					
                  </div>
                  </div>
              </div>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Team</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>				
                    {listUsers}
                </tbody>
            </table>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title><h4>Add User</h4></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input name="username" className="form-control" type="text" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input name="password" className="form-control" id="ex1" type="text" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Team</label>
                                <input name="doihinh" className="form-control" id="ex1" type="text" placeholder="Đội Hình" value={this.state.doihinh} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <select name="type" value={this.state.type} onChange={this.handleInputChange}>
                                    <option value={0}>User</option>
                                    <option value={1}>Admin</option>
                                </select>                        
                            </div>
                        </form>					                   
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleSubmit} className="btn btn-primary" value="Submit">Submit</Button>
                        <Button className='btn-danger' onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Modal variant="success" onHide={this.closeAlert} show={this.state.showAlert}>
                    <Modal.Header closeButton>
                        <Modal.Title><h4>Thông báo</h4></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Thêm thành công</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeAlert} className="btn btn-primary" value="Submit">Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
        users: state.users
    }
 }

  const mapDispatchToProps = (dispatch) => {
      return {
          onAddUser: user => {
            dispatch(actions.addUserRequest(user));
          },
          onGetUsers: users => {
              dispatch(actions.actFetchUsersRequest(users));
          }
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(List);