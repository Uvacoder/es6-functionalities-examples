var string = 'foo๐bar';
var match = string.match(/foo(.)bar/u);
console.log(match[1]);
// โ '๐'
