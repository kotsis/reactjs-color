import React, { Component } from 'react';

//katskos: A bootstrap based modal edit form for hex colors
class EditHexColorModal extends Component {
  constructor(props){
    super(props);
    this.state = { old_color: this.props.colorval, updated_color: '', error_msg: '' };

    this.handleChangedColor = this.handleChangedColor.bind(this);
    this._onSave = this._onSave.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
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
    this.setState({updated_color: e.target.value});
  }

  _onSave() {
    var hex_reg = /^[0-9a-fA-F]{6}$/;
    if(hex_reg.test(this.state.updated_color)){
      this.props.onSaveClick(this.props.nid, this.state.updated_color);
    }
  }

  render() {
    return (
        <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalEditHexTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalEditHexTitle">Edit Hex color {this.props.nid + 1}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="hexcolor">Old HEX color</label>
                    <input type="text" className="form-control" id="hexcolor" placeholder="" value={this.props.colorval} readOnly />
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="previewcolor">preview</label>
                    <span className="form-control" id="previewcolor" style={{backgroundColor: '#'+this.props.colorval}}></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="hexcolor">Updated HEX color</label>
                    <input type="text" className="form-control" id="hexcolor" placeholder="" value={this.state.updated_color} onChange={this.handleChangedColor} />
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="previewcolor">preview</label>
                    <span className="form-control" id="previewcolor" style={{backgroundColor: '#'+this.state.updated_color}}></span>
                  </div>
                </div>
                <div className="row">
                  <span style={{color: 'red'}}>{this.state.error_msg}</span>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this._onSave}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default EditHexColorModal;