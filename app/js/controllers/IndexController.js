angular.module('introGame.indexController',['ui.router'])
  .controller('IndexController', ['$state', function($state) {

    var self = this;

    self.startGame = function() {
      $state.go('albums', {});
    };

}]);
