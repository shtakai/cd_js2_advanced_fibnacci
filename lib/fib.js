
module.exports = function(){
  var idx = 0,
    val = 0,
    prev = 0,
    prev2 = 0,
    obj ={};


  obj = {
    nacci: function(){
      idx += 1;
      if(idx == 1){
        prev = 1;
        val = 1;
      }else if(idx == 2){
        prev = 1;
        prev2 = 1;
      }else {
        val = prev + prev2;
        prev2 = prev;
        prev = val;
      }
      return val;
    }
  }
  //function nacci(){

  //}
  return obj;
}();

