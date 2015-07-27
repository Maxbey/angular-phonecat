var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'ngResource']);

phonecatApp.config([
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
phonecatApp.factory('Phone', [
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
phonecatApp.filter('checkmark', function()
    {
        return function(mark){
            return mark ? '\u2713' : '\u2718';
        };
    }
);
phonecatApp.controller('AboutCtrl', function($scope)
    {
        $scope.title = 'About';    
    }
);
phonecatApp.controller('ContactsCtrl', function($scope)
    {
        $scope.title = 'Contacts';    
    }
);
phonecatApp.controller('PhoneDetailCtrl', function($scope, $http, $location, $routeParams, Phone)
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
phonecatApp.controller('PhonesCtrl', function($scope, $http, $location, Phone)
{
    $scope.title = 'Phones';
    $scope.phones = Phone.query();
});