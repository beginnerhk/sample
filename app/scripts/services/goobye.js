
(function() {
  angular
    .module('testdirApp')
    .factory('GoodBye', GoodBye);
 
  function GoodBye() {
    var show = function (str) {
      return this.singer === str;
    }
    var setSinger = function (str) {
      this.singer = str;
    }
    
    return {
      isShow : show,
      setSinger : setSinger
    };
  
  }
})();