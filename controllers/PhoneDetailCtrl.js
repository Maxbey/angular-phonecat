phonecatApp.controller('PhoneDetailCtrl', function($scope, $http, $location, $routeParams)
    {   
        $scope.title = $scope.phoneId = $routeParams.id;
    }
);