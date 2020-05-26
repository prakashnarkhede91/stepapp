
(function () {
    app.controller("chapterDetailsController", function ($scope, $rootScope, $location, $routeParams) {
        $scope.formError = "";
        $scope.grade = "";
        $scope.subjectId = $routeParams.id;

    });

})();