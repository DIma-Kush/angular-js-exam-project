(function () {
   app.controller('MainListCtrl',['$scope', 'albumService', function (
        $scope, albumService
    ) {
        'use strict';
        // console.log(albumService.get());
        // albumService.get();
               $scope.albums = albumService.get(); //load data 
                     console.log($scope.albums);

                     
             albumService.count(function (response) {
                    $scope.count = response.data.value;
                    });
       
    }]);
})();