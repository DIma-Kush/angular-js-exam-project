(function () {
    'use strict';
    // Routing START  
    var app = angular.module('musicShop');
    app.config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state("mainList", {
                        url: '/mainList',
                        templateUrl: 'app/templates/mainList.html',
                        
                    })
                    .state("albumDetail", {
                        url: '/albumDetail',
                        templateUrl: 'app/templates/albumDetail.html'
                    })
                    .state("albumAddEdit", {
                        url: '/albumAddEdit',
                        templateUrl: 'app/templates/albumAddEdit.html'
                    })
                    .state("albumDelete", {
                        url: '/albumDelete',
                        templateUrl: 'app/templates/albumDelete.html'
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