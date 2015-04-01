(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name belmgrWebApp.controller:NewEvidenceController
   * @description
   * # NewEvidenceController
   * Controller of the belmgrWebApp
   */
  angular.module('belmgrWebApp')
    .controller('EvidenceController',
                ['$scope', 'modelNewBel', '$routeParams',
                function($scope, modelNewBel, $routeParams) {

      console.log('Test')
      if ($routeParams.belUri) {
        var onSucc = function(response, status, xhr) {
          $scope.modelNewBel = response[0];
        }

        var onErr = function(xhr) {
          console.log('onErr cb', xhr);
        }
        var cb = belhop.factory.callback(onSucc, onErr)

        belUri = $routeParams.belUri;
        $scope.modelNewBel = belhop.evidence.get(belUri, cb)
      }
      else {$scope.modelNewBel = '';}

      // the model data that will be sent to the server
      $scope.belStatement = modelNewBel.belStatement;
      $scope.belCitation = modelNewBel.belCitation;
      $scope.belAnnotation = modelNewBel.belAnnotation;
      $scope.belMetadata = modelNewBel.belMetadata;

      // status states definition
      $scope.showStatement = true;
      $scope.showCitation = true;
      $scope.showAnnotation = true;
      $scope.showComment = true;

      // ng-click to submit the evidence
      $scope.submitNewBel = function() {
        $scope.modelNewBel = modelNewBel.updateNewBel();
      };

      // ng-click to reset the form
      $scope.reset = function() {
        $scope.newBelForm.$setPristine();
        $scope.modelNewBel = '';
        modelNewBel.resetNewBel();
      };
    }]);
}());
