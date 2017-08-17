(function () {
    var app = angular.module('album-detail', ['controllers']);
    app.controller('AlbumDetailCtrl', ['$scope', 'albumService', 'storageService', function (
        $scope, albumService, storageService) {
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

        //  ALSO WORKS

        // albumService.getId({
        //         id: albumId
        //     },
        //     function (response) {
        //         $scope.curAlbum.value = response.data;
        //         console.log($scope.curAlbum.value);
        //         storageService.save("albumName", $scope.curAlbum.value.title); // save album name to LS
        //     });
    }]);
})();