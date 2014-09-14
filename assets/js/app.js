$(function() {
   var $sidebar = $("#affixed-sidebar");
   $sidebar.affix({
        offset: {
            top: function () {
                var offsetTop      = $sidebar.offset().top
                var sideBarMargin  = parseInt($sidebar.children(0).css('margin-top'), 10)
                var navOuterHeight = $('.sidebar-nav').height()

                return (this.top = offsetTop - navOuterHeight - sideBarMargin)
            },
            bottom: function () {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    });

    function setActiveNav(item) {
        console.log(item);
        $(".nav-item").removeClass('active');
        $(".nav-item-" + item).addClass('active');
    }

    console.log(document.location);

    if (document.location.pathname == '/') {
        setActiveNav("home");
    } else if (document.location.pathname == '/about/') {
        setActiveNav("about");
    } else if (document.location.pathname == '/waypoints/') {
        setActiveNav("waypoints");
    }

});