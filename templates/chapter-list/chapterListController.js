
(function () {
    app.controller("chapterListController", function ($scope, $rootScope, $location, $routeParams, $timeout) {
        $scope.formError = "";
        $scope.grade = "";
        $scope.subjectId = $routeParams.id;
        $scope.loading = true;

        $timeout(function () {
            $scope.loading = false;
        }, 1000);
        var DemoList = [{
            'id': 1,
            'name': 'LIGHT 1',
            'description': "Introduction to Light, Transparent, Transculent and opaque materials",
            'islands': 5,
            'Concepts': 10,
            'status': 'Free',
            'subjectId': 1
        },
        {
            'id': 2,
            'name': 'LIGHT 2',
            'description': "Introduction to Light, Transparent, Transculent and opaque materials",
            'islands': 5,
            'Concepts': 10,
            'status': 'Free',
            'subjectId': 1
        },
        {
            'id': 3,
            'name': 'LIGHT 3',
            'description': "Introduction to Light, Transparent, Transculent and opaque materials",
            'islands': 5,
            'Concepts': 10,
            'status': 'Free',
            'subjectId': 2
        },
        {
            'id': 4,
            'name': 'LIGHT 4',
            'description': "Introduction to Light, Transparent, Transculent and opaque materials",
            'islands': 5,
            'Concepts': 10,
            'status': 'Free',
            'subjectId': 2
        },
        {
            'id': 5,
            'name': 'LIGHT 5',
            'description': "Introduction to Light, Transparent, Transculent and opaque materials",
            'islands': 5,
            'Concepts': 10,
            'status': 'Free',
            'subjectId': 3
        },
        {
            'id': 6,
            'name': 'LIGHT 6',
            'description': "Introduction to Light, Transparent, Transculent and opaque materials",
            'islands': 5,
            'Concepts': 10,
            'status': 'Free',
            'subjectId': 3
        }];

        $scope.availableDemoList = DemoList.filter(obj => obj.subjectId == $scope.subjectId)
        console.log($scope.availableDemoList);

        // $scope.proceedWithGrade = function () {

        //     if (!$scope.grade) {
        //         $scope.formError = "please select the valid data";
        //     } else {
        //         $scope.formError = "";
        //         $rootScope.selectedGrade = $scope.grade;
        //         $location.path("/grade");
        //     }
        // }
    });

})();