"use strict";

var fs = require('fs');
var path = require('path');

const PROCESS_ARGV_ARGUMENTS_FILE_PATH = 2;
const PROCESS_ARGV_ARGUMENTS_EXTENSION = 3;

function areArgumentsValid(filePath, extension) {

    return filePath !== null && extension != null;
}

function filterPathFiles(filePath, extension) {

    if (areArgumentsValid(filePath, extension)) {

        fs.readdir(filePath, (err, list) => {

            if (err) {
                console.log(err);
            } else {

                let filteredFiles = list.filter((value) => {

                    return path.extname(value) === "." + extension;
                })

                filteredFiles.forEach((value) => {

                    console.log(value);
                });
            }

        });

    }

}

filterPathFiles(process.argv[PROCESS_ARGV_ARGUMENTS_FILE_PATH], process.argv[PROCESS_ARGV_ARGUMENTS_EXTENSION]);