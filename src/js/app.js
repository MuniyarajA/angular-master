var module = angular.module('angularApp',['ui.router','ngRoute']);

module.config(function($urlRouterProvider){

  $routeProvider
                .when('/app', {
                    controller: 'formCreation',
                    templateUrl: 'src/view/form.html',
                });
 $urlRouterProvider.otherwise('/app');

});
