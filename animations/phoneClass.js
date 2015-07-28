AppAnimations.animation('.phone', function() 
    {
        console.log('works!');
        var animateToggle = function (element, className, done)
        {
            
            
            if(className != 'current')
            {
                return;
            }
            
            element.css({
                'display': 'none'
            });
            
            element.fadeIn();
        };
    
        return {
            addClass: animateToggle,
            removeClass: animateToggle
        };
    }
);