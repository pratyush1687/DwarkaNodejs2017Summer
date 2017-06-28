obj = {};
obj.a = 10;
obj.b = "hello";
obj.c = true;

obj.f = function () {
    return 'wow';
};

console.log(obj);

sessionStorage.setItem('a', JSON.stringify(obj));

var m = sessionStorage.getItem('a');