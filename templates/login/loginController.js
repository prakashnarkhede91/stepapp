
(function () {
    app.controller("loginController", function ($scope, $rootScope, $location) {
        $scope.formError = "";
        $scope.mobileNumber = "";
        $scope.password = "";
        $scope.mobileRegex = new RegExp("[^\+?\d{10}$]");
        $scope.passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


        $scope.checkLogin = function () {

            if (!$scope.mobileNumber || !$scope.password) {
                $scope.formError = "please enter the valid data";
            } else if (!$scope.mobileRegex.test($scope.mobileNumber.trim()) || !$scope.passwordRegex.test($scope.password.trim())) {
                $scope.formError = "please enter the valid data";
            } else {
                $scope.formError = "";
                $rootScope.userName = $scope.mobileNumber;
                $rootScope.loginStatus = true;

                var localStoreData = {
                    'userName': $scope.mobileNumber,
                    'selectedGrade': ""
                }
                localStorage.setItem("logindata", JSON.stringify(localStoreData));
                swal("", "Login Successful", "success");
                $location.path("/grade");
            }


        }
    });

})();