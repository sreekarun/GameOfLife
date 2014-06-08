LIFE.gameModule.directive('gameCell',['$rootScope','cellService', function($rootScope, cellService){
  return{
    restrict : 'A',
    scope :{
      cell : '=cell',
      alive : '=alive'

    },
    link: function(scope, elem){

      elem.on('click',function(){
        (scope.cell.alive == true)? scope.cell.alive = false : scope.cell.alive = true;
        scope.$apply();
      });

      elem.css({
        'top': scope.cell.m * 16 + 'px',
        'left': scope.cell.n * 16 + 'px'
      });
    }
  }
}]);


