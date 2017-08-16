(function () {
    app.controller('AlbumDetailCtrl', ['$scope','$rootScope', 'albumService','storageService', function (
        $scope,$rootScope, albumService, storageService) {
        'use strict';
   
        var albumId = storageService.get("albumId"); // get id from LS 
    
        // console.log("album ID", albumId);
        albumService.getId({
                id: albumId
            },
            function (response) {
                $scope.curAlbum.value = response.data;
                console.log($scope.curAlbum.value);
              storageService.save("albumName",$scope.curAlbum.value.title); // save album name to LS
            });
    }]);
})();