/**
 * Created by RahulS on 03-06-2016.
 */

(function () {
    var imageSliderFactory = function ($http, APIPath) {
        // var images = function () {

        //     return $http.post(APIPath + 'forum/slider-images');
        // };

        var loginUserInfo = function () {

            return $http.get(APIPath + 'users/2');
        };

        var labours = function (page) {

            return $http.get(APIPath + 'users?page=' + page);
        };

        return { loginUserInfo: loginUserInfo, labours: labours };
    };

    imageSliderFactory.$inject = ['$http', 'APIPath'];
    angular.module('stepapp').factory('imageSliderFactory', imageSliderFactory);

}());