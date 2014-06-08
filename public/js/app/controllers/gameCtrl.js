
LIFE.gameModule.controller('gameCtrl', ['$rootScope','cellService',  function($rootScope,cellService){

  $rootScope.arr = cellService.getCells();

  $rootScope.$on('nextGenerationTick',function(){
    $rootScope.arr = cellService.updateState($rootScope.arr);

  }); 

}]);
