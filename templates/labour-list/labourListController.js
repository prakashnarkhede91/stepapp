
(function () {

    app.controller("labourListController", ["$scope", "$rootScope", "$location", "imageSliderFactory", function ($scope, $rootScope, $location, SliderFactory) {
        $scope.formError = "";
        $scope.maxSize = 2;     // Limit number for pagination display number.  
        $scope.totalCount = 0;  // Total number of items in all pages. initialize as a zero  
        $scope.pageIndex = 1;   // Current page number. First page is 1.-->  
        $scope.pageSizeSelected = 6; // Maximum number of items per page.  
        $scope.numPages = 0;

        $scope.getLabours = function () {

            var lg = SliderFactory.labours($scope.pageIndex).then(function (response, status) {
                $scope.filteredItems = response.data.data;
                $scope.totalCount = response.data.total;
                $scope.numPages = response.data.total_pages;
            });

        }
        $scope.getLabours();

        //This method is calling from pagination number  
        $scope.pageChanged = function () {
            console.log("welcome pegination");
            $scope.getLabours();
        };

        //     $scope.$watch("curPage + itemsPerPage", function () {
        //         // var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
        //         //     end = begin + $scope.itemsPerPage;

        //         $scope.getLabours();
        //     });


    }]);


})();