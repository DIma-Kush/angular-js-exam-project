(function () {
    'use strict';
    // Routing START  
    var app = angular.module('musicShop');
    app.config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state("mainList", {
                        url: '/mainList',
                        template: '<main-list></main-list>',
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Songs list"; // delegate page title
                            }]
                        } 
                    })
                    .state("albumDetail", {
                        url: '/albumDetail/:albumId',
                        template: '<album-detail></album-detail>',
                        params:{albumId:null},
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Your album"; 
                            }]
                        } 
                    })
                    .state("albumAddEdit", {
                        url: '/albumAddEdit/:albumId/:flag',
                        template: '<album-add-edit></album-add-edit>',
                        params:{
                            albumId:null,
                            flag:null
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "perfect your album";
                            }]
                        } 
                    })
                    .state("albumDelete", {
                        url: '/albumDelete/:albumId',
                        template: '<album-delete></album-delete>',
                        params:{
                            albumId:null
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Delete album";
                            }]
                        } 
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