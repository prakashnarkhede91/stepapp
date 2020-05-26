
(function () {
    app.controller("gradeController", function ($scope, $rootScope, $location) {

        $scope.formError = "";
        $scope.grade1 = "";
        $scope.localStoreData = JSON.parse(localStorage.getItem("logindata"));
        if ($scope.localStoreData) {
            $scope.grade1 = $scope.localStoreData.selectedGrade;
        }
        $scope.gradeList = [
            { classId: "5", grade: "5th" },
            { classId: "6", grade: "6th" },
            { classId: "7", grade: "7th" },
            { classId: "8", grade: "8th" },
            { classId: "9", grade: "9th" },
            { classId: "10", grade: "10th" },
            { classId: "11", grade: "11th" }
        ];


        $scope.proceedWithGrade = function () {
            if (!$scope.grade1) {
                $scope.formError = "please select the valid data";
            } else {
                $scope.formError = "";
                $rootScope.selectedGrade = $scope.grade1;

                $scope.localStoreData.selectedGrade = $scope.grade1;
                localStorage.setItem("logindata", JSON.stringify($scope.localStoreData));
                $location.path("/subject-list");
            }


        }
    });

})();