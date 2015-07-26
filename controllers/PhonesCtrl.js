phonecatApp.controller('PhonesCtrl', function($scope, $http, $location)
{
    $scope.title = 'Phones';

        $http.get('data/phones.json')
             .success(function(data, status, headers, config)
            {
                $scope.phones = data;
            })
             .error(function()
            {
                console.log('Loading failed');
            });
    
    
});