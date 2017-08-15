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
                        templateUrl: 'app/templates/mainList.html'

                    })
                    .state("favorites", {
                        url: '/favorites',
                        templateUrl: 'app/templates/addSong.html'

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