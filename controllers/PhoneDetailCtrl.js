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