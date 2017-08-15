(function () {
    // rendering page controller
    app.controller('MainCtrl', ['$scope', 'albumService', '$state', function (
        $scope,
        albumService,
        $state
    ) {
        'use strict';
        // save current state and watch it change
        $scope.limitMin = 50; // limit to loaded albums by default

        
        $scope.propertyName = 'integer';
        $scope.reverse = true;
        // sotrting data function
        $scope.sortBy = function (propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };


        $scope.currState = $state;
        $scope.$watch('currState.current.name', function (newValue, oldValue) {
            switch (newValue) { // if state loaded
                case 'mainList':
                    // $scope.albums = albumService.getList(); //load data 
                    //  albumService.getList(function (response) {
                    //    $scope.albums = response.data;
                    //     console.log($scope.albums);
                    // });

                    console.log($scope.albums);
                    break;
            }
        });

    }]);
})();