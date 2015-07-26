phonecatApp.controller('PhoneDetailCtrl', function($scope, $http, $location, $routeParams)
    {   
        var url = 'data/phones/' + $routeParams.id + '.json';
    
        $http.get(url)
             .success(function(data)
                {
                    $scope.phone = data;
                    $scope.mainImageUrl = data.images[0];
            
                    //data.$save();
                }
            )
             .error(function()
                {
                    console.log('Loading failed');
                }
            );
    
        $scope.setImageUrl = function(imageUrl){
            $scope.mainImageUrl = imageUrl;
        };
    
    }
);