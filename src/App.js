import React, { Component } from 'react';
import './App.css';
import EditHexColorModal from './EditHexColorModal.js';
import DeleteHexColorModal from './DeleteHexColorModal.js';
import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { current_color: '', selected_color_index: null, color_list: [], error_msg: '' };//katskos: we initiate the applicaiton state here
    this.handleChangedColor = this.handleChangedColor.bind(this);
    this.handleSaveColor = this.handleSaveColor.bind(this);
  }

  addColorToList(){

  }
  removeColorFromList(){

  }
  updateColorInList(){

  }

  handleChangedColor(e) {
    //katskos: we validate regular expression color and show message
    var hex_reg = /^[0-9a-fA-F]{6}$/;
    if(hex_reg.test(e.target.value)){
      this.setState({error_msg: ''});
    }
    else{
      this.setState({error_msg: 'Not valid hex color!'});
    }
    this.setState({current_color: e.target.value});
  }

  handleSaveColor(){
    //TO-DO
    //this.setState(prevState => ({
    //  error_msg: '',
    //  color_list: [prevState.color_list, e.target.value]
    //}));
  }

  showEditHexModal(){
    jQuery('#myEditModal').modal('show');
  }
  showDeleteHexModal(){
    jQuery('#myDeleteModal').modal('show');
  }
  render() {

    //katskos: conditional div with error message
    let error_div;
    if(this.state.error_msg){
      error_div = <div className="alert alert-danger col-md-6" role="alert">
                    {this.state.error_msg}
                  </div>

    }
    else{
      error_div = <div className="alert alert-danger col-md-6" role="alert" style={{visibility: 'hidden'}}>
                    &nbsp;
                  </div>
    }

    return (
      <div className="App">
        <div className="container">
          <div className="py-5 text-center">
            <h2>ReactJS - Color app</h2>
            <p className="lead">A ReactJS test app with bootstrap theming as an exercise.</p>
          </div>

          {error_div}

          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Hex color list</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Hex color 1</h6>
                    <small className="text-muted">#010101</small>
                  </div>
                  <span className="col-md-1" style={{border: '1px solid #ced4da', backgroundColor: '#010101'}}></span>
                  <button type="button" className="btn btn-warning" onClick={this.showEditHexModal}>
                    <i className="fa fa-edit"></i>
                  </button>
                  <button type="button" className="btn btn-danger" onClick={this.showDeleteHexModal}>
                    <i className="fa fa-trash"></i>
                  </button>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Hex color 2</h6>
                    <small className="text-muted">#010101</small>
                  </div>
                  <span className="col-md-1" style={{border: '1px solid #ced4da', backgroundColor: '#010101'}}></span>
                  <button type="button" className="btn btn-warning" onClick={this.showEditHexModal}>
                    <i className="fa fa-edit"></i>
                  </button>
                  <button type="button" className="btn btn-danger" onClick={this.showDeleteHexModal}>
                    <i className="fa fa-trash"></i>
                  </button>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Hex color 3</h6>
                    <small className="text-muted">#010101</small>
                  </div>
                  <span className="col-md-1" style={{border: '1px solid #ced4da', backgroundColor: '#010101'}}></span>
                  <button type="button" className="btn btn-warning" onClick={this.showEditHexModal}>
                    <i className="fa fa-edit"></i>
                  </button>
                  <button type="button" className="btn btn-danger" onClick={this.showDeleteHexModal}>
                    <i className="fa fa-trash"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Add new hex color to list</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="hexcolor">HEX color</label>
                    <input type="text" className="form-control" id="hexcolor" placeholder="" value={this.state.current_color} onChange={this.handleChangedColor} required />
                    <br/>
                    <button className="btn btn-primary" type="button" onClick={this.handleSaveColor}>Save</button>
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="previewcolor">preview</label>
                    <span className="form-control" id="previewcolor" style={{backgroundColor: '#'+this.state.current_color}}></span>
                  </div>
                </div>
            </div>
          </div>
          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">&copy; My company</p>
          </footer>
        </div>

        <EditHexColorModal id="myEditModal" onRef={ref => (this.myEditModal = ref)} />
        <DeleteHexColorModal id="myDeleteModal" onRef={ref => (this.myDeleteModal = ref)} />
      </div>
    );
  }
}

export default App;
