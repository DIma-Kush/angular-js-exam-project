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
                        controller:'MainListCtrl',
                          resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Lemberg Music"; 
                            }]
                        } 
                    })
                    .state("albumDetail", {
                        url: '/albumDetail',
                        templateUrl: 'app/templates/albumDetail.html',
                        controller:'AlbumDetailCtrl',
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Your album"; // delegate page title
                            }]
                        } 
                    })
                    .state("albumAddEdit", {
                        url: '/albumAddEdit',
                        templateUrl: 'app/templates/albumAddEdit.html',
                        controller:'AlbumEditAddCtrl',
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "perfect your album";
                            }]
                        } 
                    })
                    .state("albumDelete", {
                        url: '/albumDelete',
                        templateUrl: 'app/templates/albumDelete.html',
                        controller:'AlbumDeleteCtrl',
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Delete album";
                            }]
                        } 
                        // component:'album-delete',
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