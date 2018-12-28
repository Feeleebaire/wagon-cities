import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class ActiveCity extends Component {

  render(){
    console.log(this.props.activeCity);
    if(!this.props.activeCity){
      return(
        <div className="active-city">
            <p>Select a city...</p>
          </div>
        )
      } else {
      const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
      return(
        <div className="active-city">
          <img src={url} width="100%" />
        </div>
      ) };
  }
}

function mapReduxStateToProps(reduxstate) {
  return {
    activeCity: reduxstate.activeCity
  }
}


export default connect(mapReduxStateToProps)(ActiveCity);
