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
            var element = '.phone';
            
            angular.element(element).hide();
            angular.element(element).fadeIn();
            
            $scope.mainImageUrl = 'public/' + imageUrl;
        };
    
        
    
        
        $scope.$on('$viewContentLoaded', function(event)
            {
                angular.element('body,html').delay(200).animate({
                    scrollTop: 0
                }, 0);
            }
        );
    }
);