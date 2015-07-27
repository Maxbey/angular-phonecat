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
AppServices.factory('Phone', [
    '$resource', function($resource)
    {
        return $resource('data/phones/:phoneId.:format', 
            {
                phoneId: 'phones',
                format: 'json'
            }
        );
    }
]);
AppFilters.filter('checkmark', function()
    {
        return function(mark){
            return mark ? '\u2713' : '\u2718';
        };
    }
);
AppControllers.controller('AboutCtrl', function($scope)
    {
        $scope.title = 'About';    
    }
);
AppControllers.controller('ContactsCtrl', function($scope)
    {
        $scope.title = 'Contacts';    
    }
);
AppControllers.controller('PhoneDetailCtrl', function($scope, $http, $location, $routeParams, Phone)
    {   
        Phone.get({phoneId: $routeParams.id}, function(data)
            {
                $scope.phone = data;
                $scope.mainImageUrl = 'public/' + data.images[0];
            }
        );
        
        
        $scope.setImageUrl = function(imageUrl)
        {
            $scope.mainImageUrl = 'public/' + imageUrl;
        };
    }
);
AppControllers.controller('PhonesCtrl', function($scope, $http, $location, Phone)
{
    $scope.title = 'Phones';
    $scope.phones = Phone.query();
});