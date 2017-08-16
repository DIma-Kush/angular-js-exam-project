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

        $scope.editAlbumClick = function(flag){
            $scope.flag = flag;
            $scope.curAlbum.value = null;
            // $state.go('albumAddEdit');
        }

        $scope.currState = $state; //save current state
        $scope.$watch('currState.current.name', function (newValue, oldValue) {
            switch (newValue) { // if state loaded
                case 'mainList':
                 $scope.title = "Songs List";
                    break;
                case 'albumDetail': // if albumDetail checked or reloaded
                //   $scope.title = $scope.curAlbum.value.title;
                    break;
                case 'albumAddEdit':
                 $scope.curAlbum.value = null; // reset on reload
                break;
            }
        });

    }]);
})();