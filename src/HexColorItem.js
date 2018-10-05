import React, { Component } from 'react';

//katskos: A bootstrap based list item of a hex color. This wa srequired to be made a Component so that we
//can use it in a loop and be able to call a parent method with parameters from props.
class HexColorItem extends Component {

  constructor(props){
    super(props);

    this._onEdit = this._onEdit.bind(this);
    this._onDelete = this._onDelete.bind(this);
  }

  _onEdit() {
    this.props.onEditClick(this.props.nid);
  }

  _onDelete() {
    this.props.onDeleteClick(this.props.nid);
  }

  render() {
    return (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">Hex color {this.props.nid+1}</h6>
                <small className="text-muted">#{this.props.colorval}</small>
            </div>
            <span className="col-md-1" style={{border: '1px solid #ced4da', backgroundColor: '#'+this.props.colorval}}></span>
            <button type="button" className="btn btn-warning" onClick={this._onEdit}>
                <i className="fa fa-edit"></i>
            </button>
            <button type="button" className="btn btn-danger" onClick={this._onDelete}>
                <i className="fa fa-trash"></i>
            </button>
        </li>
    );
  }
}

export default HexColorItem;
