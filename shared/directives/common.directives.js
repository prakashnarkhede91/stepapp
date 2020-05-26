(function () {
    'use strict';

    angular.module('stepapp').directive('loading', function () {
        return {
            restrict: 'E',
            replace: true,
            template: '<div id="loader-wrapper" class="main-progress"><div id="loader" class="sub-progress"></div><div class="loader-section section-left"></div><div class="loader-section section-right"></div></div>',
            link: function (scope, element, attr) {
                scope.$watch('loading', function (val) {
                    if (val)
                        $(element).show();
                    else
                        $(element).hide();
                });
            }
        }
    })

})();