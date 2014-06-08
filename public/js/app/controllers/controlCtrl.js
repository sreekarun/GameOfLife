
LIFE.gameModule.controller('controlCtrl', ['$scope', 'cellService', '$rootScope',  function($scope, cellService,$rootScope){
  $scope.start = function(){
    console.log('started');
    window.setInterval(function(){
      console.log('within interval');
      $rootScope.$emit('nextGenerationTick');
      $rootScope.$apply();
    }, 1000);
  }

  $scope.stop = function(){
    console.log('stopped');
  }

  $scope.step = function(){
    console.log('step');
    $rootScope.$emit('nextGenerationTick');
  }
}]);
