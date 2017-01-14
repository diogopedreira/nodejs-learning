"use strict";

var fs = require('fs');
var path = require('path');

function areArgumentsValid(filePath, extension) {

    return filePath !== null && extension != null;
}

module.exports = function (filePath, extension, callback) {

    if (areArgumentsValid(filePath, extension)) {

        fs.readdir(filePath, (err, list) => {

            if (err) {

                callback(err);

            } else {

                let filteredFiles = list.filter((value) => {

                    return path.extname(value) === "." + extension;
                });

                callback(null, filteredFiles);
            }

        });
    }
};