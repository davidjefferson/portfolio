var Theme = {

    init : function(){
        Theme.buildBxSlider();
        Theme.peoples();
        Theme.animatedWOW();
    },

    buildBxSlider : function(){
        $('.bxslider').bxSlider({
            mode: 'fade',
            auto: true,
            speed: 2000
        });
    },

    peoples : function() {
        var peopleActive = $('a.collapse-people.active');
        if (!peopleActive.length) {
            peopleActive = $('a.collapse-people:eq(0)');
        }

        $(peopleActive).removeClass('active').addClass('active');
        $(peopleActive.attr('href')).removeClass('in').addClass('in');

        $(document).on('click', 'a.collapse-people',function(e){
            e.preventDefault();
            $('.collapse.people', $(this).closest('article')).removeClass('in');
            $($(this).attr('href')).addClass('in animated');

            $('.collapse-people', $(this).closest('article')).removeClass('active');
            $(this).addClass('active');
        });
    },

    animatedWOW : function() {
        var wow = new WOW(
            {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
                callback:     function(box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated
                },
                scrollContainer: null // optional scroll container selector, otherwise use window
            }
        );
        wow.init();
    }
};

$(document).ready(function(){
    Theme.init();
});
