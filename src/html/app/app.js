(function () {
    var app = angular.module("musicShop", [
        "site-directives",
        "angularCSS",
        "Controllers",
        'ui.router',
        'ui.bootstrap',
        'ngResource'
    ]);

    // Routing START  
    app.config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $stateProvider
                    .state("mainList", {
                        url: '/mainList',
                        templateUrl: 'app/templates/mainList.html',
                        resolve: {
                            'title': ['storageService', '$rootScope', function ($rootScope) {
                                $rootScope.title = "Songs list";
                            }]
                        }

                    })
                    .state("addAlbum", {
                        url: '/addAlbum',
                        templateUrl: 'app/templates/addSong.html'

                    })
                    .state("albumDetail",{
                        url: '/albumDetail',
                        templateUrl: 'app/templates/albumDetail.html',
                         resolve: {
                            'title': ['storageService', '$rootScope', function (storageService, $rootScope) {
                                $rootScope.title = storageService.get("albumName");
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
    app.factory('albumService', ['$resource', function ($resource) {
        return $resource('/albums/all', {}, {
             get: {
          method: 'GET',
          isArray: true,
          transformResponse: function(data) {
            var arr = [];
            var data_obj = JSON.parse(data);
            _.each(data_obj, function(obj){
              arr.push(obj);
            });
            return arr;
          }
        },
            getId:{
                method: 'GET',
                url:'/albums/get/:id',
                 interceptor: {
                    response: function (response) {
                        // expose response
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
        }
        });
    }]);


})();