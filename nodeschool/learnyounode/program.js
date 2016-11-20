// ---------------------- learnyounode node 1st exercise

function helloWorld() {

    "use strict";
    console.log('HELLO WORLD');
}

// helloWorld();


// ---------------------- learnyounode 2nd exercise

const PROCESS_ARGV_ARGUMENTS_START_INDEX = 2;

function convertStringToNumber(value) {

    "use strict";
    var convertedValue = null;


    if (value != null && !isNaN(value)) {

        convertedValue = Number(value);
    }

    return convertedValue;
}

function areArgumentsValid(args) {

    "use strict";
    return args && args != null && args.length > 0;
}

function sumArguments(args) {

    "use strict";
    var result = null;

    if (areArgumentsValid(args)) {

        for (var i = 0; i < args.length; i++) {

            result = result + convertStringToNumber(args[i]);
        }
    }

    console.log(result);
}

//sumArguments(process.argv.slice(PROCESS_ARGV_ARGUMENTS_START_INDEX, process.argv.length));


// ---------------------- learnyounode node 3rd exercise
