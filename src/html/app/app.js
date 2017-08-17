(function () {
    var app = angular.module("musicShop", [
        // 'albumsList',
        "site-directives",
        "navigation",
        "controllers",
        'ui.router',
        'ngResource'

    ]);

    // Routing START  
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
    app.factory('storageService', [function () {
        return {
            get: function (key) {
                return localStorage.getItem(key);
            },
            save: function (key, data) {
                localStorage.setItem(key, data);
            }
        };
    }]);

    // Album REST service
    app.factory('albumService', ['$resource', function ($resource) {
        return $resource('/albums/all', {}, {
            get: {
                method: 'GET',
                isArray: true,
                transformResponse: function (data) { // transform array data
                    var arr = [];
                    var data_obj = JSON.parse(data);
                    _.each(data_obj, function (obj) {
                        arr.push(obj);
                    });
                    return arr;
                }
            },
            getId: {
                method: 'GET',
                url: '/albums/get/:id',
                interceptor: {
                    response: function (response) {
                        return response;
                    }
                }
            },
            count: {
                method: 'GET',
                url: '/albums/count',
                interceptor: {
                    response: function (response) {
                        // expose response
                        return response;
                    }
                }
            },
            add: {
                method: 'POST',
                url: '/albums/add',
                interceptor: {
                    response: function (response) {

                        return response;
                    }
                }
            },

            update: {
                method: 'POST',
                url: '/albums/update/:id',
                interceptor: {
                    response: function (response) {

                        return response;
                    }
                }
            },
            delete: {
                method: 'DELETE',
                url: '/albums/delete/:id',
                interceptor: {
                    response: function (response) {

                        return response;
                    }
                }
            }
        });
    }]);


})();