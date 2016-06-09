describe('IndexController', function() {
  beforeEach(module('introGame.indexController'));

  var stateMock;
  var ctrl;

  beforeEach(inject(function($rootScope, $controller, $q) {
   deferred = $q.defer();
   stateMock = jasmine.createSpyObj('$state spy', ['go']);
   scope = $rootScope;
   ctrl = $controller('IndexController', {
     $state: stateMock
   });
 }));

  describe('#starting the game from index', function() {

    it('calls ctrl.startGame', function() {
      ctrl.startGame();
      expect(stateMock.go).toHaveBeenCalledWith('albums',{});
    });
  });
});
