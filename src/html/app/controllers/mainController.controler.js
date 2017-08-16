(function () {
    // rendering page controller
    app.controller('MainCtrl', ['$scope', 'albumService', 'storageService', '$state', function (
        $scope,
        albumService,
        storageService,
        $state
    ) {
        'use strict';
        // go back function 
         $scope.goBack = function() {
                window.history.back();
        };
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

        $scope.albums = {
            value: ''
        }; // scope for albumsList. Rendering in child controllers
        $scope.curAlbum = {
            value: ''
        }; // scope for albumDetail. Click in albumList and render albumDetail

        $scope.currState = $state;
        $scope.$watch('currState.current.name', function (newValue, oldValue) {
            switch (newValue) { // if state loaded
                case 'mainList':
                 $scope.title = "Songs List";
                    // $scope.albums = albumService.getList(); //load data 
                    //  albumService.getList(function (response) {
                    //    $scope.albums = response.data;
                    //     console.log($scope.albums);
                    // });

                    // console.log($scope.albums);
                    break;
                case 'albumDetail': // if albumDetail checked or reloaded
                  $scope.title = $scope.curAlbum.value.title;
                    // var albumId = storageService.get("albumId"); // get id from LS 
                    // console.log("album ID", albumId);
                    // albumService.getId({
                    //         id: albumId
                    //     },
                    //     function (response) { 
                    //         $scope.curAlbum.value = response.data;
                    //         console.log($scope.curAlbum.value);
                    //     });
                    break;
            }
        });

    }]);
})();