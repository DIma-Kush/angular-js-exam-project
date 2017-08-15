(function () {

    "use strict";
    var app = angular.module("site-directives", []);

    app.directive("siteHeader", function () {
        return {
            restrict: "AE",
            templateUrl: "app/templates/header.html"
        };
    });
    app.directive("siteSidebar", function () {
        return {
            restrict: "AE",
            templateUrl: "app/templates/sideMenu.html"
        };
    });
    app.directive("siteRouter", function () {
        return {
            restrict: "AE",
            templateUrl: "app/templates/router.html"
        }
    });
    // Collapsing directive for mobile
    app.directive('navCollapse', function () {
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                var visible = false;

                element.on('show.bs.collapse', function () {
                    visible = true;
                });

                element.on("hide.bs.collapse", function () {
                    visible = false;
                });

                element.on('click', function (event) {
                    if (visible && 'auto' == element.css('overflow-y')) {
                        element.collapse('hide');
                    }
                });
            }
        };
    });
app.directive('onScrollToBottom', function ($document) {
    //This function will fire an event when the container/document is scrolled to the bottom of the page
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var doc = angular.element($document)[0].body;

            $document.bind("scroll", function () {

                //console.log('in scroll');
                //console.log("scrollTop + offsetHeight:" + (doc.scrollTop + doc.offsetHeight));
                //console.log("scrollHeight: " + doc.scrollHeight);

                if (doc.scrollTop + doc.offsetHeight >= doc.scrollHeight) {
                    //run the event that was passed through
                    scope.$apply(attrs.onScrollToBottom);
                }
            });
        }
    };
});


})();