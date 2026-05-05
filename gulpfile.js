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
const cleanCSS = require('gulp-clean-css'); // Додали підключення
const uglify = require('gulp-uglify');     // Додали підключення

// Твоя стара задача (можна залишити)

//ports.cloneFiles = async () => {
//  return gulp.src('app/**/*.*')
//      .pipe(gulp.dest('public'));
//}
exports.cloneFiles = async () => {
    return gulp.src('app/**/*.{html,js}') 
        .pipe(gulp.dest('public')); 
}
// НОВА ЗАДАЧА: Мініфікація CSS
exports.minifyCSS = async () => {
    return gulp.src('app/**/*.css')   // Бере файли CSS з папки app
        .pipe(cleanCSS())             // Стискає їх
        .pipe(gulp.dest('public'));   // Кладе в папку public
}

// НОВА ЗАДАЧА: Мініфікація JS
exports.minifyJS = async () => {
    return gulp.src('app/**/*.js')    // Бере файли JS з папки app
        .pipe(uglify())               // Стискає їх
        .pipe(gulp.dest('public'));   // Кладе в папку public
}