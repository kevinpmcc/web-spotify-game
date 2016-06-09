angular.module('introGame.routing', ['ui.router'])
   .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider
      .when('','/index')
      .when('/','/index')
      .otherwise('/index');

    $stateProvider

      .state('index', {
        url: '/index',
        templateUrl: 'views/partials/splash.html'
      })
      .state('albums', {
        url: '/albums',
        templateUrl: 'views/partials/albums.html'

      })
      .state('song', {
        url: '/song',
        templateUrl: 'views/partials/song.html',
      })
      .state('answer', {
        url: '/answer',
        templateUrl: 'views/partials/answer.html'
      });
    });
