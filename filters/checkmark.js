phonecatApp.filter('checkmark', function()
    {
        return function(mark){
            return mark ? '\u2713' : '\u2718';
        };
    }
);