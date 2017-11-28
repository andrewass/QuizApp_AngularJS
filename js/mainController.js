

var mainModule = angular.module("mainModule", []);

var questArr = [];

mainModule.controller("mainController", function ($scope) {

    $scope.displayCategories = function () {
        $scope.showQuestion = false;
        $scope.showCategory = true;
        questArr = [];
    };

    $scope.displayQuestion = function () {
        $scope.showCategory = false;
        $scope.showQuestion = true;
    };

});