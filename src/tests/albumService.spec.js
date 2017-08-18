// test Album factory(app.services.js file) for geting data from server
'use strict';

describe('albumServiceTest', function() {
    var $httpBackend;
    var albumService;
  
    var albumsGetDataSended = {
      "0": {
        "title": "It Aint me",
        "artist": "Selena Gomez",
        "country": "USA",
        "company": "Columbia",
        "price": 213,
        "year": 2017,
        "id": 0
      }
    };
    var albumsGetDataSendedStr = JSON.stringify(albumsGetDataSended);
    
    var albumsGetDataExpected = [
      {
        "title": "It Aint me",
        "artist": "Selena Gomez",
        "country": "USA",
        "company": "Columbia",
        "price": 213,
        "year": 2017,
        "id": 0
      }
    ];
  
    // Add a custom equality tester before each test
    beforeEach(function() {
      jasmine.addCustomEqualityTester(angular.equals);
    });
  
    // Load the module that contains the `albumService` service before each test
    beforeEach(module('musicShop'));
  
    // Instantiate the service and "train" `$httpBackend` before each test
    beforeEach(inject(function(_$httpBackend_, _albumService_) { // underScore wrapping
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/albums/all').respond(albumsGetDataSendedStr);
 
      albumService = _albumService_;
    }));
  
    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  
    it('should fetch the albums data from REST url `/albums/all`', function() {
      console.log('Start unit test: albumService.spec.js');
     
      var albums = albumService.get();
   
      expect(albums).toEqual([]);
      
      $httpBackend.flush();
      expect(albums).toEqual(albumsGetDataExpected);
  
      console.log('-----------------------albumService GET TEST SUCCESS --------------------------------------');
    });
  
  });