
(function () {

    app.controller("subjectListController", ["$scope", "$rootScope", "$location", "imageSliderFactory", function ($scope, $rootScope, $location, SliderFactory) {
        $scope.formError = "";
        $scope.grade = "";


        // var lg = SliderFactory.images().then(function (response, status) {
        //     console.log(response);
        // });

        $scope.subjectDemoList = [{
            'subjectId': 1,
            'subjectName': "Science",
            'chapterList': [{ 'name': "Light" }, { 'name': "Magnetism" }, { 'name': "ch1" }, { 'name': "ch2" }, { 'name': "ch3" }, { 'name': "ch4" }]

        }, {
            'subjectId': 2,
            'subjectName': "Math",
            'chapterList': [{ 'name': "mathCh1" }, { 'name': "mathCh2" }, { 'name': "mathCh3" }, { 'name': "mathCh4" }, { 'name': "mathCh4" }]

        }, {
            'subjectId': 3,
            'subjectName': "Physics",
            'chapterList': [{ 'name': "phyCh1" }, { 'name': "phyCh2" }, { 'name': "phyCh3" }, { 'name': "phyCh4" }, { 'name': "phyCh5" }]

        }]

        $scope.get_detail_list = function () {

            $location.path("/free-demo-list");

            // if (!$scope.grade) {
            //     $scope.formError = "please select the valid data";
            // } else {
            //     $scope.formError = "";
            //     $rootScope.selectedGrade = $scope.grade;

            // }
        }
    }]);

})();