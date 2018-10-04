import React, { Component } from 'react';
import jQuery from 'jquery';

class DeleteHexColorModal extends Component {
  constructor(props){
    super(props);
    this.id = props.id;
    //this.state = { current_color: '000000', selected_color_index: null, color_list: [], error_msg: 'aa' };//katskos: we initiate the applicaiton state here
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
    jQuery('aaa').html();
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

export default DeleteHexColorModal;