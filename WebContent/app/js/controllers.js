angular.module('GeoCountriesApp.controllers', []).

/* Countries controller */
  controller('countriesController', function($scope, geoAPIservice) {
    $scope.nameFilter = null;
    $scope.countriesList = [];
    
    $scope.searchFilter = function (country) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(country.countryName) ;
    };

    geoAPIservice.getCountries().success(function (response) {
        //Digging into the response to get the relevant data
       
    	 $scope.countriesList = response.geonames;
    });
  }).

  /* Country controller */
  controller('countryController', function($scope, $routeParams, geoAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.country = null;

    geoAPIservice.getCountryDetails($scope.id).success(function (response) {
        $scope.country = response.geonames[0]; 
    });


  });