"use strict";

const PROCESS_ARGV_ARGUMENTS_START_INDEX = 2;

function convertStringToNumber(value) {


    var convertedValue = null;

    if (value != null && !isNaN(value)) {

        convertedValue = Number(value);
    }

    return convertedValue;
}

function areArgumentsValid(args) {

    return args && args != null && args.length > 0;
}

function sumArguments(args) {

    var result = null;

    if (areArgumentsValid(args)) {

        for (var i = 0; i < args.length; i++) {

            result = result + convertStringToNumber(args[i]);
        }
    }

    console.log(result);
}

sumArguments(process.argv.slice(PROCESS_ARGV_ARGUMENTS_START_INDEX, process.argv.length));
