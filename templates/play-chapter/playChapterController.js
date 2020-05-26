
(function () {
    app.controller("playChapterController", function ($scope, $rootScope, $location, $routeParams) {
        $scope.formError = "";
        $scope.grade = "";
        $scope.subjectId = $routeParams.id;

    });

})();