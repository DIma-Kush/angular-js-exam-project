(function () {
   var app = angular.module('main-list', ['musicShop']);
   app.component('mainList',{
        templateUrl:'app/templates/mainList.html',
        controller:['albumService', 'storageService', '$state', 
        function MainListCtrl(albumService, storageService, $state){
            var self = this;
            self.albums = albumService.get();

        self.limitMin = 50; // limit to loaded albums by default
        // check limit maximum
        self.clickMore = function () {
            if (self.limitMin >= self.count || self.limitMin == 400) {
                self.limitMin = self.count;
            } else {
                self.limitMin += 50;
            }
        }
        // check limit minimum
        self.clickLess = function () {
            if (self.limitMin <= 0 || self.limitMin == 50) {
                self.limitMin = 50;
            } else {
                self.limitMin -= 50;
            }

        }
        // scopes for sorting
        self.propertyName = 'integer';
        self.reverse = true;

        // sotrting data function
        self.sortBy = function (propertyName) {
            self.reverse = (self.propertyName === propertyName) ? !self.reverse : false;
            self.propertyName = propertyName;
        };
  
        // click to detail page
        self.albumDetailClick = function (id) {
            $state.go('albumDetail',{albumId:id});
        }

        albumService.count(function (response) {
            self.count = response.data.value;
        });
            console.log("Main list component",this);
        }]
   });
  
})();