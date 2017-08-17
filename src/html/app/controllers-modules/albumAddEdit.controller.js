(function () {
    var app = angular.module('album-add-edit', ['controllers']);
    app.controller('AlbumEditAddCtrl', ['$scope', '$state', 'albumService', 'storageService', function (
        $scope, $state, albumService, storageService) {
        'use strict';

        var flag = $scope.flag;

        if ($scope.flag == undefined || $scope.flag == null) { // if reaload
            flag = storageService.get("flag"); // get from LS
        }

        $scope.modeProceed = function () { // click trigger
            var data = {
                'title': $scope.curAlbum.value.title || '',
                'artist': $scope.curAlbum.value.artist || '',
                'company': $scope.curAlbum.value.company || '',
                'country': $scope.curAlbum.value.country || '',
                'price': $scope.curAlbum.value.price || '',
                'year': $scope.curAlbum.value.year || '',
                'logoUrl': $scope.curAlbum.value.logoUrl || ''
            }
            data.price = data.price.toString(); // library operate only with strings
            var data_string = JSON.stringify(data); // stringdify to send
            // switch proceed button
            switch (flag) {
                case 'editMode':
                    albumService.update({
                        id: albumId
                    }, data_string, function (response) {
                        console.log(response);
                        $state.go('albumDetail');
                    }, function (error) {
                        console.log('err_resp', error.data);
                    });
                    break;
                case 'addMode':
                    albumService.add({}, data_string, function (response) {
                        console.log(response.data);
                        $scope.curAlbum.value = response.data;
                        storageService.save("albumId", response.data.id);
                        $state.go('albumDetail');
                    }, function (error) {
                        console.log('err_resp', error.data);
                    });
                    break;
            }

        }

        // switching add or edit flags which was set as parameter in global editAlbumClick function
        switch (flag) {
            case 'editMode':
               
                $scope.editMode = 'editMode';
                storageService.save("flag", $scope.editMode); // save flag to LS
                var albumId = storageService.get("albumId"); // get id from LS 

                albumService.getId({
                        id: albumId
                    },
                    function (response) {
                        $scope.curAlbum.value = response.data;
                        // $scope.title = "edit ";
                        console.log($scope.curAlbum.value);
                        
                    });
                break;
            case 'addMode':
                $scope.addMode = 'addMode';
                storageService.save("flag", $scope.addMode); // save flag to LS
                var data = {
                    'title': '',
                    'artist': '',
                    'company': '',
                    'country': '',
                    'price': '',
                    'year': '',
                    'logoUrl': ''
                }
                $scope.curAlbum = data; // reset all data

                break;
        }




    }]);
})();