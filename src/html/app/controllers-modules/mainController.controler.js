(function () {
    // rendering page controller
    var app = angular.module('controllers', [
        'main-list',
        'album-detail',
        'album-add-edit',
        'album-delete'
    ]);
    app.controller('MainCtrl', ['$scope', 'albumService', 'storageService', '$state', function (
        $scope,
        albumService,
        storageService,
        $state
    ) {
        'use strict';
        // go back function 
        $scope.goBack = function () {
            window.history.back();
        };
        // scope for albumsList. Rendering in child controllers
        $scope.albums = {
            value: ''
        };
        // scope for albumDetail. Click in albumList and render albumDetail
        $scope.curAlbum = {
            value: ''
        };
        // scope for albumEdit. Click in albumList or AlbumDetail and render albumEdit
        $scope.editAlbum = {
            value: ''
        };

        $scope.editAlbumClick = function (id, flag) {
            $scope.curAlbum.value = null; // reset album
            $scope.flag = flag; // save flag
            storageService.save("albumId", id); // save edited id to LS 

        }
        $scope.deleteAlbumClick = function (id) {
            $scope.curAlbum.value = null; // reset album
            storageService.save("albumId", id); // save edited id to LS 
        }

        $scope.currState = $state; //save current state
        $scope.$watch('currState.current.name', function (newValue, oldValue) { // watch state change
            switch (newValue) { // if state loaded
                case 'mainList':
                    $scope.title = "Songs List";
                    break;
                case 'albumDetail': // if albumDetail checked or reloaded
                    if ($scope.title == undefined || $scope.title == null) { // if reaload
                        $scope.title = storageService.get("albumName"); // get from LS
                    } else { // it's click without reload
                        $scope.title = $scope.curAlbum.value.title;
                    }
                    break;
                case 'albumAddEdit':
                    $scope.title = "Add/Edit";
                    $scope.curAlbum.value = null; // reset on reload
                    break;
                case 'albumDelete':
                    $scope.title = "Delete Album";
                    $scope.curAlbum.value = null; // reset on reload
                    break;
            }
        });

    }]);
})();