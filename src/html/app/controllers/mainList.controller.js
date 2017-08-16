(function () {
    app.controller('MainListCtrl', ['$scope','albumService','storageService', '$state', function (
        $scope, albumService, storageService, $state
    ) {
        'use strict';
        $scope.albums.value = albumService.get(); //load data 
        console.log($scope.albums.value);

        $scope.albumDetail = function (id) {
            $scope.curAlbum.value = $scope.albums.value[id];
            console.log(id);
            console.log($scope.curAlbum.value);
            storageService.save("albumId", id);
            $state.go('albumDetail');
        }

        albumService.count(function (response) {
            $scope.count = response.data.value;
        });

    }]);
})();