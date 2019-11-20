import React, { Component } from 'react';
import Item from './Item';
import {Modal, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from './../Actions/index';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
          username: '',
          password: '',
          team: '',
          permission: ''
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }
    
    open() {
        this.setState({ showModal: true });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.props.onAddUser(this.state);
        this.close();
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
            return <Item username={user.username} password={user.password} team={user.team} permission={user.permission} key={index} index={index+1}/>
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
                    <th>Permission</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>				
                    {listUsers}
                </tbody>
            </table>
              {/* <div className="clearfix">
                  <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                  <ul className="pagination">
                  <li className="page-item disabled"><a href="#/">Previous</a></li>
                  <li className="page-item"><a href="#/" className="page-link">1</a></li>
                  <li className="page-item"><a href="#/" className="page-link">2</a></li>
                  <li className="page-item active"><a href="#/" className="page-link">3</a></li>
                  <li className="page-item"><a href="#/" className="page-link">4</a></li>
                  <li className="page-item"><a href="#/" className="page-link">5</a></li>
                  <li className="page-item"><a href="#/" className="page-link">Next</a></li>
                  </ul>
              </div> */}
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
                                <input name="team" className="form-control" id="ex1" type="text" placeholder="Team" value={this.state.team} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Permission</label>
                                <input name="permission" className="form-control" id="ex1" type="text" placeholder="Permission" value={this.state.permission} onChange={this.handleInputChange} required />
                            </div>
                        </form>					                   
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleSubmit} className="btn btn-primary" value="Submit">Submit</Button>
                        <Button className='btn-danger' onClick={this.close}>Close</Button>
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
            dispatch(actions.addUser(user));
          }
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(List);