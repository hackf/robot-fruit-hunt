var mockFunctions = function (funcs, Player) {
  funcs.forEach(function(func, index) {
    var exclude = [
      'Player1',
      'Player2',
      '_window'
    ];
    if (exclude.indexOf(func) === -1) {
      Player[func] = window[func];
    }
  });
};

var initHackery = function (Player) {
  var currentScope = Object.keys(window);
  var functionNames = _.difference(currentScope, window._window);
  mockFunctions(functionNames, Player);
};

var setPlayerScope = function (Player) {
  Object.keys(Player).forEach(function (value, index) {
    //console.log("SET", value, Player[value]);
    window[value] = Player[value];
  });
};

var savePlayerScope = function (Player) {
  Object.keys(Player).forEach(function (value, index) {
    if (value !== "makeMove" && value !== "name") {
      Player[value] = window[value];
    }
  });
};

window._window = Object.keys(window);
