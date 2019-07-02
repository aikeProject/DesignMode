function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("Hello World from your main file!");

var test = function test() {
  console.log('--');
};

test();

var Test = function Test(name) {
  _classCallCheck(this, Test);

  this.name = name;
};