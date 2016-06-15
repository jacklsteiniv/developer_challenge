angular
.module('ElmApp', ['ui.router', 'ngAnimate'])
.config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {

  $stateProvider

  //set up states - urls and templates
  .state('intro', {
    url: '/intro',
    templateUrl: 'intro.html'

  })

  .state('chapter1', {
    url: '/chapter1',
    templateUrl: 'chapter1.html'


  })

  .state('chapter2', {
    url: '/chapter2',
    templateUrl: 'chapter2.html'

  })

  .state('chapter3', {
    url: '/chapter3',
    templateUrl: 'chapter3.html'
  })

  $urlRouterProvider.otherwise('/intro');

}
