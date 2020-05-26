app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "templates/home/home.html",
            controller: 'homeController',
        })
        .when('/login', {
            templateUrl: "templates/login/login.html",
            controller: 'loginController',
        })
        .when('/grade', {
            templateUrl: "templates/grade/select-grade.html",
            controller: 'gradeController',
        })
        .when('/subject-list', {
            templateUrl: "templates/subject-list/subjectList.html",
            controller: 'subjectListController',
        })
        .when('/chapter-list/:id', {
            templateUrl: "templates/chapter-list/chapterList.html",
            controller: 'chapterListController',
        })
        .when('/chapter-details/:id', {
            templateUrl: "templates/chapter-details/chapterDetails.html",
            controller: 'chapterDetailsController',
        })
        .when('/play-chapter/:id', {
            templateUrl: "templates/play-chapter/playChapter.html",
            controller: 'playChapterController',
        })
        .when('/labour-list', {
            templateUrl: "templates/labour-list/labourList.html",
            controller: 'labourListController',
        })


        .otherwise({
            redirectTo: '/'
        });
});