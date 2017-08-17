(function () {
    var app = angular.module('album-delete', ['controllers']);
    app.controller('AlbumDeleteCtrl', ['$scope','$state', 'albumService', 'storageService', function (
        $scope, $state, albumService, storageService) {
        'use strict';

        var albumId = storageService.get("albumId"); // get id from LS 

       //    USING Underscore.js
        albumService.get({}, function (arr) {
            $scope.curAlbum.value = _.find(arr, function (obj) { // compare list
                return obj.id == albumId; // by id. true - > proceed. undefined -> error
            });
            console.log("SELF", $scope.curAlbum.value);
            storageService.save("albumName", $scope.curAlbum.value.title); // save album name to LS
        });
    
        $scope.delAlbum = function(){
            albumService.delete({
                        id: albumId
                    },  function (response) {
                        console.log("DELETE",response);
                        $state.go('mainList');
                    }, function (error) {
                        console.log('err_resp', error.data);
                    });
        }
    }]);
})();