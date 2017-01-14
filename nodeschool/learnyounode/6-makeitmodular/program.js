"use strict";

var listfiltereddirectory = require('./list-filtered-directory');

const PROCESS_ARGV_ARGUMENTS_FILE_PATH = 2;
const PROCESS_ARGV_ARGUMENTS_EXTENSION = 3;

let filePath = process.argv[PROCESS_ARGV_ARGUMENTS_FILE_PATH];
let extension = process.argv[PROCESS_ARGV_ARGUMENTS_EXTENSION];

listfiltereddirectory(filePath, extension, (err, data) => {

    if(err) {

        console.log(err)

    } else {

        data.forEach((value) => {
            console.log(value);
        });
    }
});


