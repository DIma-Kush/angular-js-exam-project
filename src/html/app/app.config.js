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
                        controller:'MainListCtrl'
                        
                    })
                    .state("albumDetail", {
                        url: '/albumDetail',
                        templateUrl: 'app/templates/albumDetail.html',
                        controller:'AlbumDetailCtrl'
                    })
                    .state("albumAddEdit", {
                        url: '/albumAddEdit',
                        templateUrl: 'app/templates/albumAddEdit.html',
                        controller:'AlbumEditAddCtrl'
                    })
                    .state("albumDelete", {
                        url: '/albumDelete',
                        templateUrl: 'app/templates/albumDelete.html',
                        controller:'AlbumDeleteCtrl'
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