
(function() {
  angular
    .module('testdirApp')
    .factory('GoodBye', GoodBye);
 
  function GoodBye() {
    var getMessage = function () {
      if (! this.funny) {
        return "GoodBye";
      }
      return this.funny;
    }
    var setMessage = function (str) {
      this.funny = str;
    }
    
    return {
      getMsg : getMessage,
      setMsg : setMessage
    };
  
  }
})();