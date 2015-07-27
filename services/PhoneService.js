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