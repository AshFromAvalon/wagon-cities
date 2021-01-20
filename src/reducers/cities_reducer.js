import cities from '../../fake_db/cities_data';

export default function (state = null, action) {
  switch (action.type) {
    case 'CITY_SELECTED':
      return state
    default:
      return cities;
  }
};
