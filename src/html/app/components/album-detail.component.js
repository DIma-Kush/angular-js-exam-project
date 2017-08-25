(function () {
    var app = angular.module('album-detail', ['musicShop']);

    app.component('albumDetail', {
        templateUrl: 'app/templates/albumDetail.html',
        controller: ['albumService', 'storageService', '$state',
            function AlbumDetailCtrl(albumService, storageService, $state) {
                //////////////////
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
                console.log(self);
            }
        ]
    });
})();