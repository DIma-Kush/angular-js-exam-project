(function () {
    var app = angular.module("musicShop", [
        "site-directives",
        "angularCSS",
        "Controllers",
        'ui.router',
        'ui.bootstrap',
        'ngTouch',
    ]);

    // Routing START  
    app.config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $stateProvider
                    .state("mainList", {
                        url: '/mainList',
                        templateUrl: 'app/templates/mainPage.html'
                        // views: {
                        //     'mainPage@parent': {
                        //         templateUrl: '../app/templates/mainPage.html'
                        //     }
                        // },
                        // resolve: {
                        // }
                    })
                    .state("favorites", {
                        url: '/favorites',
                        templateUrl: 'app/templates/favorites.html'
                        // views: {
                        //     'favorites@mainContainer': {
                                
                        //     }
                        // },
                        // resolve: {
                        // }
                    })    
                $urlRouterProvider.otherwise('/mainList');
            }
        ])
        .run(['$rootScope', '$state', '$stateParams', // for route header name
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope.$on('$locationChangeStart', function () {
                    document.body.scrollTop = document.documentElement.scrollTop = 0; // to top onclick
                });
            }

        ]);
    
})();