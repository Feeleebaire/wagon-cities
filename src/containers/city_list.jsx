import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from '../containers/city';
import {setCities} from '../actions';



class CityList extends Component {
   componentWillMount() {
    this.props.setCities();
  }
  render(){
    return(
      <div className="cities list-group-item ">
         {this.props.cities.map((city) => <City city={city} key= {city.name}/>)}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) { return bindActionCreators(
    { setCities: setCities },
  dispatch );
}

function mapStateToProps(state) { return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
