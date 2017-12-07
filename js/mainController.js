

var mainModule = angular.module("mainModule", []);


mainModule.controller("mainCtrl", function ($scope) {


    /* Set the main controller to display the main menu view */
    $scope.displayCategories = function () {
        $scope.showQuestion = false;
        $scope.showCategory = true;
        $scope.questArr = [];
        return true;
    };

    /* Set the main controller to display the question view */
    $scope.displayQuestion = function () {
        $scope.showCategory = false;
        $scope.showQuestion = true;
        return true;
    };

});