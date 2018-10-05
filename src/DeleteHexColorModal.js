import React, { Component } from 'react';

class DeleteHexColorModal extends Component {
  constructor(props){
    super(props);
    this._onDelete = this._onDelete.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  _onDelete() {
    this.props.onDeleteClick(this.props.nid);
  }

  render() {
    return (
        <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalDeleteHexTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalDeleteHexTitle">Delete Hex color {this.props.nid + 1}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="hexcolor">HEX color</label>
                    <input type="text" className="form-control" id="hexcolor" placeholder="" value={'#'+this.props.colorval} readOnly />
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="previewcolor">preview</label>
                    <span className="form-control" id="previewcolor" style={{backgroundColor: '#'+this.props.colorval}}></span>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger" onClick={this._onDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default DeleteHexColorModal;