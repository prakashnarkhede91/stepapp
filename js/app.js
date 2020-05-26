var app = angular.module("stepapp", ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
app.run(function ($rootScope) {
    $rootScope.userName = "";
    $rootScope.selectedGrade = "";
    $rootScope.loginStatus = false;
    $rootScope.schoolName = '';


});

