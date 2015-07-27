phonecatApp.controller('PhoneDetailCtrl', function($scope, $http, $location, $routeParams, Phone)
    {   
        Phone.get({phoneId: $routeParams.id}, function(data)
            {
                $scope.phone = data;
                $scope.mainImageUrl = data.images[0];
            }
        );
        
        
        $scope.setImageUrl = function(imageUrl)
        {
            $scope.mainImageUrl = imageUrl;
        };
    }
);