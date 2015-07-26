var phonecatApp = angular.module('phonecatApp', ['ngRoute']);

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
phonecatApp.controller('PhoneDetailCtrl', function($scope, $http, $location, $routeParams)
    {   
        var url = 'data/phones/' + $routeParams.id + '.json';
    
        $http.get(url)
             .success(function(data)
                {
                    $scope.phone = data;
                    data.$save();
                }
            )
             .error(function()
                {
                    console.log('Loading failed');
                }
            );
    }
);
phonecatApp.controller('PhonesCtrl', function($scope, $http, $location)
{
    $scope.title = 'Phones';

        $http.get('data/phones/phones.json')
             .success(function(data, status, headers, config)
            {
                $scope.phones = data;
            })
             .error(function()
            {
                console.log('Loading failed');
            });
    
    
});