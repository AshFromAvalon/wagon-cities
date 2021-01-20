import React, { Component } from 'react';
import City from './city';

import { connect } from 'react-redux';

class CityList extends Component {

  render() {
    return (
      <ul className="cities">
        {this.props.cities.map(city => <City key={city.name} city={city} />)}
      </ul>
    );
  }
}


function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}


export default connect(mapStateToProps)(CityList);
