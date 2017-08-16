(function () {
    app.controller('MainListCtrl', ['$scope', 'albumService', 'storageService', '$state', function (
        $scope, albumService, storageService, $state
    ) {
        'use strict';
        // save current state and watch it change
        $scope.limitMin = 50; // limit to loaded albums by default

        // scopes for sorting
        $scope.propertyName = 'integer';
        $scope.reverse = true;
        // sotrting data function
        $scope.sortBy = function (propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };


        $scope.albums.value = albumService.get(); //load data 
        console.log($scope.albums.value);

        $scope.albumDetailClick = function (id) {
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