/**
 * Created by RahulS on 08-07-2016.
 */

(function () {
    var userdetailsFactory = function ($http, APIPath, $sessionStorage) {

        var headers = { 'token': $sessionStorage.APIToken }

        var post_UserDetails = function (data) {
            return $http.post(APIPath + 'updateStudentDetails', data).success(function (data) {
            });
        };

        var get_UserDetails = function (data) {
            return $http.post(APIPath + 'getStudentDetailsById', data).success(function (data) {
            });
        };

        var delete_UserDetails = function (data) {
            return $http.post(APIPath + 'deleteStudentDetails', data).success(function (data) {
            });
        };

        var edit_UserDetails = function (data) {
            return $http.post(APIPath + 'GetSpecificDetailsOfStudent', data).success(function (data) {
            });
        };

        var get_CountryDetails = function () {
            return $http.get(APIPath + 'GetAllCountryDetails', { headers: headers }).success(function (data) {
            });
        };

        var get_StateDetails = function (data) {
            return $http.post(APIPath + 'GetAllStateDetailsByCountryId', data).success(function (data) {
            });
        };

        return { post_UserDetails: post_UserDetails, get_UserDetails: get_UserDetails, delete_UserDetails: delete_UserDetails, edit_UserDetails: edit_UserDetails, get_CountryDetails: get_CountryDetails, get_StateDetails: get_StateDetails};
    };

    userdetailsFactory.$inject = ['$http', 'APIPath', '$sessionStorage'];
    angular.module('app').factory('userdetailsFactory', userdetailsFactory);
}());