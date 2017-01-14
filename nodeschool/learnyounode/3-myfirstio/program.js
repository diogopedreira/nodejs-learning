"use strict";

var fs = require('fs');

const PROCESS_ARGV_ARGUMENTS_START_INDEX = 2;

function isFilePathValid(filePath) {

    return filePath !== null && fs.existsSync(filePath);
}

function countFileLines(filePath) {

    let lineNumber = null;

    if (isFilePathValid(filePath)) {

        let buffer = fs.readFileSync(filePath);

        let fileContent = buffer.toString();

        lineNumber = fileContent.split("\n").length - 1;
    }

    console.log(lineNumber);
}

countFileLines(process.argv[PROCESS_ARGV_ARGUMENTS_START_INDEX]);