angular.module('GeoCountriesApp.services', [])
  .factory('geoAPIservice', function($http) {

    var geoAPI = {};

    geoAPI.getCountries = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://api.geonames.org/countryInfoJSON?username=systech&callback=JSON_CALLBACK'
        
      });
    }

    geoAPI.getCountryDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://api.geonames.org/countryInfoJSON?country='+id+'&username=systech&callback=JSON_CALLBACK'
        
      });
    }

    return geoAPI;
  });