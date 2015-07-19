
( function () {
  angular
    .module('testdirApp')
      .controller('Hello', ['GoodBye', Hello]);
  
  function Hello(GoodBye) {
    this.obj = GoodBye;
    this.obj.setMsg("avicii wake me up");
    this.msg = this.obj.getMsg();
//	this.msg = JSON.stringify(this.obj);
	this.setError = function () {
	  this.err = "error";
	}
    
  }
})();