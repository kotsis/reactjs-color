import React, { Component } from 'react';

class EditHexColorModal extends Component {
  constructor(props){
    super(props);
    this.id = props.id;
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  render() {
    return (
        <div id={this.id}>aaa</div>
    );
  }
}

export default EditHexColorModal;