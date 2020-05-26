

(function () {
    'use strict';

    angular.module('stepapp').controller('Shared_controller', Shared_controller);

    Shared_controller.$inject = ['$scope', '$location', '$window', '$uibModal'];

    function Shared_controller($scope, $location, $window, $uibModal) {
        var $ctrl = this;
        $scope.userInfo = "";


        // $ctrl.animationsEnabled = true;


        const localStoreData = JSON.parse(localStorage.getItem("logindata"));
        if (localStoreData) {
            $scope.loginStatus = true;
            $scope.userName = localStoreData.userName;
            $scope.selectedGrade = localStoreData.selectedGrade;
        } else {
            $location.path('/');
        }

        $scope.Logout_Click = function () {
            swal({
                title: "Are you sure to logout ?",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    if ($scope.userName != null && $scope.loginStatus != "false") {  //Check wheather user is loggedIn or not
                        localStorage.removeItem("logindata");
                        //To redirect page after successful logout
                        $window.location.reload();     //To refresh page after
                    }
                }
            });

        };

        $scope.openModal = function (size, parentSelector) {
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: './shared/controllers/profileInfo.html',
                controller: 'ModalContentCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    // userInfo: function () {

                    //     return $scope.userInfo;
                    // }
                }
            });

        }
    }
    app.controller('ModalContentCtrl', ['$scope', '$uibModalInstance', "imageSliderFactory", function ($scope, $uibModalInstance, userFactory) {

        var $ctrl = this;

        var lg = userFactory.loginUserInfo().then(function (response, status) {

            if (response.status == 200) {
                $scope.userInfo = response.data.data;
                console.log($scope.userInfo);
            }
        });
        $ctrl.ok = function () {
            console.log("welcome 1");
            $uibModalInstance.close(false);
        };

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('close');
        };


        $uibModalInstance.result.then(function () {
            // Success	
        }, function () {
            // Cancel
        });

    }]);


})();
