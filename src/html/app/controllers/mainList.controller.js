(function () {
    app.controller('MainListCtrl', ['$scope', 'albumService', 'storageService', '$state', function (
        $scope, albumService, storageService, $state
    ) {
        'use strict';
        $scope.limitMin = 50; // limit to loaded albums by default
        $scope.clickMore = function () {
            if ($scope.limitMin >= $scope.count || $scope.limitMin == 400) {
                $scope.limitMin = $scope.count;
            } else {
                $scope.limitMin += 50;
            }
        }
        $scope.clickLess = function () {
            if ($scope.limitMin <= 0 || $scope.limitMin == 50) {
                $scope.limitMin = 50;
            } else {
                $scope.limitMin -= 50;
            }

        }

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