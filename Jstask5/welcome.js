var routerApp = angular.module('ngRouteExample', ['ui.router'])
    routerApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/one');
    $stateProvider
        .state('one', {
            url: '/one',
            template: '<h1 style="margin-left: 150px; margin-top: 0; font-size: 50px; font-weight: bolder;">welcome</h1>'
        })
        .state('article',
        {
            url: '/article',
            templateUrl: 'article.html'

        })
        .state('article.adding', {
            url: '/adding',
            templateUrl: 'article2.html'
        })
        .state('submit', {
            url: '/article',
            templateUrl: 'article.html'
        })
        .state('three', {
            url: '/three',
            template: '<h1 style="margin-left: 150px; margin-top: 0; font-size: 50px; font-weight: bolder;">three</h1>'

        })
        .state('four', {
            url: '/four',
            template: '<h1 style="margin-left: 150px; margin-top: 0; font-size: 50px; font-weight: bolder;">four</h1>'

        })
        .state('five', {
            url: '/five',
            template: '<h1 style="margin-left: 150px; margin-top: 0; font-size: 50px; font-weight: bolder;">five</h1>'

        })
        .state('six', {
            url: '/six',
            template: '<h1 style="margin-left: 150px; margin-top: 0; font-size: 50px; font-weight: bolder;">six</h1>'

        })
        .state('seven', {
            url: '/seven',
            template: '<h1 style="margin-left: 150px; margin-top: 0; font-size: 50px; font-weight: bolder;">seven</h1>'

        });
});
routerApp.controller('articleCtrl', function($scope,$http){
    $scope.list = function(){
    $http({
        method: 'GET',
        url: '/carrots-admin-ajax/a/article/search',
    }).then(function successCallback(response){
        console.log(response);
        $scope.dataset = response.data.data.articleList;
        console.log($scope.dataset);
        },
        function  errorCallback(reponse){
            alert("gaojier");
    })
    }
});