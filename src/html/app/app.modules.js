(function () {
    'use strict';
    var app = angular.module("musicShop", [
        "site-directives",
        "main-list",
        "album-detail",
        "album-add-edit",
        "album-delete",
        'ui.router',
        'ngResource'
    ]);
})();