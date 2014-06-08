LIFE.gameModule.service('cellService', [function() {
  var cells = [];
  var m = 20;
  var n = 20;

  function Cell(m,n){
    this.alive = false;
    this.m = m;
    this.n = n;
    console.log(m, 'm');
  }

  function shouldIBeAlive(item, arr){
    //get all the alive neighbors count
    var refM = item.m;
    var refN = item.n;
    var neighbors = []
    for( var i = 0; i < arr.length; i++){

      if(arr[i].m == refM || arr[i].m == (refM -1) || arr[i].m == (refM +1)){
        if((arr[i]).m !== refM){
          if( arr[i].n == refN ){
            neighbors.push(arr[i]);
          } 

        }

        if(arr[i].n == (refN -1)|| arr[i].n == (refN + 1)){
            neighbors.push(arr[i]);
        } 
      }

    }

    var returnVal = false;
    var aliveNeighbors = 0;

    for (var k =0; k < neighbors.length; k++ ){
      if(neighbors[k].alive == true){
        aliveNeighbors = aliveNeighbors + 1;
      }

    }


    //Any live cell with fewer than tow live neighbors dies ( under population )

    switch (item.alive){
      case true:
        if(aliveNeighbors < 2 ){
          returnVal = false;
        }
        if(aliveNeighbors == 2  || aliveNeighbors == 3  ){
          returnVal = true;
        }
        if(aliveNeighbors > 3 ){
          returnVal = false;
        }


        break;

      case false:
        if(aliveNeighbors === 3 ){
          returnVal = true;
        }

        break;
    }

    return returnVal;
  }

  
  for( var i = 0; i < m ; i++){
  	for (var j = 0; j < n; j++){
      cells.push(new Cell(i,j));
    }
  }

  return {
  	getCells : function (){
  		return cells;
  	},

    updateState : function(arr){
      var arrCopy = angular.copy(arr);
      for( var i =0; i< arr.length; i++){
        arrCopy[i].alive =  shouldIBeAlive(arr[i], arr);
      }

      return arrCopy;
    }

  }


}]);
