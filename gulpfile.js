/*
function myTask(callback) {
    console.log('Hello Roma!');

    callback();
}

async function myTask2() {
    console.log('Task2: Hello Roma!');

}
exports.myTask = myTask;
exports.myTask2 = myTask2;

exports.myTask3 = async function myTask3() {
    console.log('Task3: Hello Roma Tkachuk :) !!!')
}

exports.myTask4 = async () => {
    console.log('Task4: Hello Tkachuk!')
}
*/

const gulp = require('gulp');

exports.cloneFiles = async () => {
    return gulp.src('app/*.html') 
        .pipe(gulp.dest('public')); 
}