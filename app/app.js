'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
var cbapp = angular
  .module('yapp', [
    'ui.router',
    'ngAnimate'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html'
          })
          .state('chatbox', {
            url: '/chatbox',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/chatbox.html',
            controller: 'ChatCtrl'
          })
          .state('train', {
            url: '/train',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/train.html',
            controller: 'TrainCtrl'
          })
          .state('files', {
            url: '/files',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/files.html',
            controller: 'FilesCtrl'
          })
          .state('logs', {
            url: '/logs',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/logs.html',
            controller: 'LogsCtrl'
          })
          .state('settings', {
            url: '/settings',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/settings.html'
          })
          .state('FAQ', {
            url: '/FAQ',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/FAQ.html'
          })
          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html'
          });

  });
