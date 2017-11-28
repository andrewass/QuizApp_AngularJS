



mainModule.controller("questionController", function ($scope) {


    /* Increment the question index to display the next question */
    $scope.getNextQuestion = function () {
        if($scope.ind < $scope.questArr.length){
            $scope.ind++;
        }
    };
});