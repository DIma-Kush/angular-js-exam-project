
describe("storageService Test", function() {

    beforeEach(module('musicShop'));

    var storageService, store;

    beforeEach(inject(function(_storageService_) { // underScore wrapper
        storageService = _storageService_;
      store = {};
      var localStorage = window.localStorage;
      spyOn(localStorage, 'getItem').and.callFake(function (key) {
        return store[key];
      });
      spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
        return store[key] = value + '';
      });
      spyOn(localStorage, 'removeItem').and.callFake(function (key) {
      });
    }));
  
    it("It should save data to LS, get it and delete", function() {
      storageService.save('stuff','hello');
      expect(storageService.get('stuff')).toEqual('hello');
      storageService.remove('stuff');
      expect(storageService.remove('stuff')).toEqual(undefined);
      console.log('-----------------------storageService GET TEST SUCCESS --------------------------------------');
    });
  });