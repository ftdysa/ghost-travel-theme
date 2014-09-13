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
});