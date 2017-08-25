(function () {
    var app = angular.module('album-add-edit', ['musicShop']);
    app.component('albumAddEdit', {
        templateUrl: "app/templates/albumAddEdit.html",
        controller: ['$state', 'albumService', 'storageService',
            function AlbumEditAddCtrl($state, albumService, storageService) {
                ///////////////////
                var self = this;
                var flag = $state.params.flag;
                var albumId = $state.params.albumId;
                self.album = {};
                //////////////////

                // switching add or edit flags which was set as parameter in global editAlbumClick function
                switch (flag) {
                    case 'editMode': // EDIT LOADED
                        self.editMode = 'editMode';
                        albumService.getId({
                                id: albumId
                            },
                            function (response) {
                                self.album = response.data;
                            });
                        break;
                    case 'addMode': // ADD LOADED
                        self.addMode = 'addMode';
                        var data = {
                            'title': '',
                            'artist': '',
                            'company': '',
                            'country': '',
                            'price': '',
                            'year': '',
                            'logoUrl': ''
                        }
                        self.album = data; // reset all data
                        break;
                    default: // on reload -> edit

                        break;
                }
                self.modeProceed = function () { // click trigger
                    var data = {
                        'title': self.album.title || '',
                        'artist': self.album.artist || '',
                        'company': self.album.company || '',
                        'country': self.album.country || '',
                        'price': self.album.price || '',
                        'year': self.album.year || '',
                        'logoUrl': self.album.logoUrl || ''
                    }
                    data.price = data.price.toString(); // library operate only with strings
                    var data_string = JSON.stringify(data); // stringdify to send
                    // switch proceed button
                    switch (flag) {
                        case 'editMode': // EDIT CLICK
                            albumService.update({
                                id: albumId
                            }, data_string, function (response) {
                                $state.go('albumDetail', {
                                    albumId: albumId
                                });
                            }, function (error) {
                                console.log('err_resp', error.data);
                            });
                            break;
                        case 'addMode': // ADD CLICK
                            albumService.add({}, data_string, function (response) {
                                $state.go('albumDetail', {
                                    albumId: response.data.id
                                });
                            }, function (error) {
                                console.log('err_resp', error.data);
                            });
                            break;
                    }

                }

            }
        ]
    });

})();