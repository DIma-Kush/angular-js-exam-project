(function () {
  'use strict';
  var app = angular.module('musicShop');
    app.factory('storageService', [function () {
      return {
          get: function (key) {
              return localStorage.getItem(key);
          },
          save: function (key, data) {
              localStorage.setItem(key, data);
          },
          remove: function(key) {
              localStorage.removeItem(key);
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