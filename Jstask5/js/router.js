/*路由*/
var routerApp = angular.module('ngRouteExample', ['ui.router']);
routerApp.config(function ($stateProvider,$urlRouterProvider) {
$urlRouterProvider.otherwise('/one');
$stateProvider
    .state('one', {
        url: '/one',
        template: '<h1>welcome</h1>'
    })


    /*article列表*/
    .state('article', {
        url: '/article?status&type&endAt&startAt&page',
        templateUrl: 'article.html',
        controller:'articleCtrl',
        controllerAs: 'vm'
    })
    /*新增页面*/
    .state('article.adding', {
        url: '/adding?ID  ',
        templateUrl: 'articleDetil.html',
        controller: 'addCtrl as add'
       // controllerAs: 'add'
    })


    // test
    .state('three', {
        url: '/three',
        template: '<h1>three</h1>'

    })
    .state('four', {
        url: '/four',
        template: '<h1>four</h1>'

    })
    .state('five', {
        url: '/five',
        template: '<h1>five</h1>'

    })
    .state('six', {
        url: '/six',
        template: '<h1>six</h1>'

    })
    .state('seven', {
        url: '/seven',
        template: '<h1>seven</h1>'

    });
});