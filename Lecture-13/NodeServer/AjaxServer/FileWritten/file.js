/**
 * Created by aayusharora on 7/8/17.
 */

var fileSystem = require('fs');

function writeFile(todo) {

    fileSystem.writeFile('text.json',JSON.stringify(todo),function(req,res) {
        console.log("File is written");
    });
}

function readFile(cb) {

    fileSystem.readFile('text.json',function(err, data) {
        if(data !== undefined) {
            cb(data.toString());
        }

    })

}

module.exports = {
    main: writeFile,
    getData: readFile
};