(function () {
    var app = angular.module('album-delete', ['musicShop']);
    app.component('albumDelete', {
        templateUrl: "app/templates/albumDelete.html",
        controller: ['$state', 'albumService', 'storageService',
            function AlbumDeleteCtrl($state, albumService, storageService) {
                ///////////////////
                var self = this;
                var albumId = $state.params.albumId;
                self.album = {};
                //////////////////
           
                albumService.get({}, function (arr) {
                    self.album = _.find(arr, function (obj) { // compare list
                        return obj.id == albumId; // by id. true - > proceed. undefined -> error
                    });

                    storageService.save("albumName", self.album.title); // save album name to LS
                });

                self.delAlbum = function () {
                    albumService.delete({
                        id: albumId
                    }, function (response) {
                        console.log("DELETE", response);
                        $state.go('mainList');
                    }, function (error) {
                        console.log('err_resp', error.data);
                    });
                }
            }
        ]

    });

})();