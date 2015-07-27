AppControllers.controller('PhonesCtrl', function($scope, $http, $location, Phone)
{
    $scope.title = 'Phones';
    $scope.phones = Phone.query();
});