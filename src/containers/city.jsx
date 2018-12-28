import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';


class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }
  render(){

    return(
      <div className="active-city" onClick={this.handleClick}>
      <p>{this.props.city.name} - {this.props.city.address}</p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
      dispatch
  );
}


export default connect(null, mapDispatchToProps)(City);


