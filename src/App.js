import React, { Component } from 'react';
import './App.css';
import EditHexColorModal from './EditHexColorModal.js';
import DeleteHexColorModal from './DeleteHexColorModal.js';
import HexColorItem from './HexColorItem.js';
import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { current_color: '', selected_color_index: null, color_list: [], error_msg: '' };//katskos: we initiate the applicaiton state here
    this.handleChangedColor = this.handleChangedColor.bind(this);
    this.handleSaveColor = this.handleSaveColor.bind(this);

    this.showEditHexModal = this.showEditHexModal.bind(this);
    this.updateColor = this.updateColor.bind(this);

    this.showDeleteHexModal = this.showDeleteHexModal.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
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
    var hex_reg = /^[0-9a-fA-F]{6}$/;
    if(hex_reg.test(this.state.current_color)){
      var new_list = this.state.color_list.slice();
      new_list.push(this.state.current_color);
      this.setState({current_color: '', color_list: new_list, error_msg: ''});
    }
  }

  showDeleteHexModal(color_index){
    this.setState({selected_color_index: color_index});
    jQuery('#myDeleteModal').modal('show');
  }
  deleteColor(color_index){
    var new_list = this.state.color_list.slice();
    new_list.splice(color_index, 1);
    this.setState({selected_color_index: null, color_list: new_list});
    jQuery('#myDeleteModal').modal('hide');
  }
  showEditHexModal(color_index){
    this.setState({selected_color_index: color_index});
    //this.myEditModal.setState({updated_color: this.state.color_list[this.state.selected_color_index]}, function(){
      jQuery('#myEditModal').modal('show');
    //});
  }
  updateColor(color_index, new_color){
    var new_list = this.state.color_list.slice();
    new_list[color_index] = new_color;
    this.setState({selected_color_index: null, color_list: new_list});
    this.myEditModal.setState({updated_color: ''});
    jQuery('#myEditModal').modal('hide');
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

    var previewBgColor = '#'+this.state.current_color;
    if(this.state.current_color === ''){
      previewBgColor = 'unset';
    }

    //katskos: color list
    const hex_color_list = this.state.color_list.map((colorval, key) =>
      <HexColorItem key={'coloritem'+key} onEditClick={this.showEditHexModal} onDeleteClick={this.showDeleteHexModal} nid={key} colorval={colorval} />
    );

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
                <span className="badge badge-secondary badge-pill">{this.state.color_list.length}</span>
              </h4>
              <ul className="list-group mb-3">
                {hex_color_list}
              </ul>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Add new hex color to list</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="hexcolor">HEX color</label>
                    <input type="text" className="form-control" id="hexcolor" placeholder="" value={this.state.current_color} onChange={this.handleChangedColor} />
                    <br/>
                    <button className="btn btn-primary" type="button" onClick={this.handleSaveColor}>Save</button>
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="previewcolor">preview</label>
                    <span className="form-control" id="previewcolor" style={{backgroundColor: previewBgColor}}></span>
                  </div>
                </div>
            </div>
          </div>
          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">&copy; My company</p>
          </footer>
        </div>

        <EditHexColorModal id="myEditModal"
          onRef={ref => (this.myEditModal = ref)}
          nid={this.state.selected_color_index}
          colorval={this.state.color_list[this.state.selected_color_index]||''}
          onSaveClick={this.updateColor}
        />
        <DeleteHexColorModal id="myDeleteModal"
          onRef={ref => (this.myDeleteModal = ref)}
          nid={this.state.selected_color_index}
          colorval={this.state.color_list[this.state.selected_color_index]}
          onDeleteClick={this.deleteColor}
        />
      </div>
    );
  }
}

export default App;
