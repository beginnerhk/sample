
( function () {
  angular
    .module('testdirApp')
      .controller('Hello', ['GoodBye', Hello]);
  
  function Hello(GoodBye) {
    this.song = GoodBye;
    this.song.setSinger("ancii");
//	this.msg = JSON.stringify(this.obj);

  }
})();