"use strict";

var fs = require('fs');

const PROCESS_ARGV_ARGUMENTS_START_INDEX = 2;

function isFilePathValid(filePath) {

    return filePath !== null;
}

function countFileLines(filePath) {

    if (isFilePathValid(filePath)) {

        fs.readFile(filePath, (err, data) => {

            if (err) {

                console.log(err);

            } else {

                let fileContent = data.toString();

                console.log(fileContent.split("\n").length - 1);
            }
        });

    }

}

countFileLines(process.argv[PROCESS_ARGV_ARGUMENTS_START_INDEX]);