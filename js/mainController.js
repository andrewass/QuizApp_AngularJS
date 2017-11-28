

var mainModule = angular.module("mainModule", []);




mainModule.controller("mainController", function ($scope) {

    $scope.questArr = [];

    $scope.displayCategories = function () {
        $scope.showQuestion = false;
        $scope.showCategory = true;
        $scope.questArr = [];
    };

    $scope.displayQuestion = function () {
        $scope.showCategory = false;
        $scope.showQuestion = true;
        $scope.ind = 0;
        $scope.getNextQuestion();
    };

});