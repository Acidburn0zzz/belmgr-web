(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name belmgrWebApp.controller:MainController
   * @description
   * # MainController
   * Controller of the belmgrWebApp
   */
  angular.module('belmgrWebApp')
    .controller('MainController', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
}());
