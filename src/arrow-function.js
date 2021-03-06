/* eslint-disable */

{
  // ES3,ES5
  var evens = [1, 2, 3, 4, 5];
  var odds = evens.map(function(v) {
    return v + 1
  });
  console.log(evens, odds);

}
{
  // ES6
  let evens = [1, 2, 3, 4, 5];
  let odds = evens.map(v => v + 1);
  console.log(evens, odds);
}

{
  // ES3,ES5
  var factory = function() {
    this.a = 'a';
    this.b = 'b';
    this.c = {
      a: 'a+',
      b: function() {
        return this.a //this指向该函数被调用的对象
      }
    }
  };
  console.log(new factory().c.b());
}

{
  var factory = function() {
    this.a = 'a';
    this.b = 'b';
    this.c = {
      a: 'a+',
      b: () => {
        return this.a //箭头函数this的指向是定义时this的指向
      }
    }
  };
  console.log(new factory().c.b());
}
