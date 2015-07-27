var App = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatAnimations',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
]);

var AppControllers = angular.module('phonecatControllers', []);
var AppFilters = angular.module('phonecatFilters', []);
var AppServices = angular.module('phonecatServices', ['ngResource']);
var AppAnimations = angular.module('phonecatAnimations', ['ngAnimate']);


App.config([
    '$routeProvider', '$locationProvider' ,function($routeProvide, $locationProvider){
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $routeProvide
            .when('/', {
                templateUrl: 'templates/index.html',
                controller: 'PhonesCtrl'
            })
            .when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl' 
            })
            .when('/contacts', {
                    templateUrl: 'templates/contacts.html',
                    controller: 'ContactsCtrl' 
            })
            .when('/phones/:id', {
                templateUrl: 'templates/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);