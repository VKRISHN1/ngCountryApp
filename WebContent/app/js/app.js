angular.module('GeoCountriesApp', [
  'GeoCountriesApp.services',
  'GeoCountriesApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/countries", {templateUrl: "partials/countries.html", controller: "countriesController"}).
	when("/countries/:id", {templateUrl: "partials/country.html", controller: "countryController"}).
	otherwise({redirectTo: '/countries'});
}]);