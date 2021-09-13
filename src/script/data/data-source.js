const axios = require('axios').default;

class DataSource {
  static listArea() {
    return axios
      .get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((response) => response.data)
      .then((responseJSON) => {
        if (responseJSON.meals) {
          return Promise.resolve(responseJSON.meals);
        } else {
          return Promise.reject('area is not found');
        }
      });
  }

  static filterByArea(keyword) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${keyword}`)
      .then((response) => response.data)
      .then((responseJSON) => {
        if (responseJSON.meals) {
          return Promise.resolve(responseJSON.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static lookupById(keyword) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${keyword}`)
      .then((response) => response.data)
      .then((responseJSON) => {
        if (responseJSON.meals) {
          return Promise.resolve(responseJSON.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
