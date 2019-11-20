import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from './../Actions/index';

class Item extends Component {
  constructor(props) {
    super(props);
      this.state = {
        showModal: false
    };
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleSubmit(user){
      this.props.onDelUser(user);
      this.close();
    }

    render(){
      const user = this.props;
      return (
          <tr>
            <td>{user.index}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.team}</td>
            <td>{user.permission}</td>
            <td>
              <a onClick={this.open} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
            </td>
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title><h4>Delete</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Are you sure you want to delete these Records?</p>     
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-danger' onClick={() => this.handleSubmit(user)}>Delete</Button>
                    <Button onClick={this.close}>Cancel</Button>
                </Modal.Footer>
              </Modal>      
          </tr>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelUser: user => {
          dispatch(actions.delUser(user));
        }
    }
  }

  export default connect(null, mapDispatchToProps)(Item);
  // export default Item;