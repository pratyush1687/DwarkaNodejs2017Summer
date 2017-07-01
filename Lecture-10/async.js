function doSomething(done) {
    var a = 10;
    console.log("doing");
    // we are doing something
    done(function (ready) {
        var a =11;
        console.log("after done");
        ready();
    });
}

doSomething(function (afterDone) {
    var b = 20;
    console.log("done");
    afterDone(function(){
        console.log("ready");

    });




});

//


// function doSomething () {

// }

// doSomething(function() {
//     var b = 10;
//     console.log("done");


// });

