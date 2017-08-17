(function () {
    var app = angular.module("site-directives", ['musicShop']);
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
    // image 404 load error fix
    app.directive('errSrc', function () {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {
                    if (attrs.src != attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });
            }
        }
    });
})();