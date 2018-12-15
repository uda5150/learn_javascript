
// コンストラクター関数を使わない場合
// 空オブジェクトを作成して、オブジェクトを返す必要がある
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + obj.name + '.');
  };
  return obj;
}

// コンストラクター関数を使った場合
// コンストラクター関数は大文字
// 実質、JSのクラス

function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + obj.name + '.');
  };
}
