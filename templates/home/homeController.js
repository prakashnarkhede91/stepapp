app.controller("homeController", function ($scope, $location, $rootScope) {
    $scope.formError = "";
    $scope.selectedSchool = "";
    $scope.schoolList = ["Excel Public School",
        "Global International School",
        "Space International School",
        "New Grace Academy",
        "Siddhi International Academy"
    ];
    $scope.proceedWithSchool = function () {
        if ($scope.selectedSchool == "") {
            $scope.formError = " * School selection is mendatory";
        } else {
            $scope.formError = "";
            $rootScope.schoolName = $scope.selectedSchool;
            $location.path("/login");
        }
    }
    $scope.Logout_Click = function () {

        console.log("welcome 1");
    };

});