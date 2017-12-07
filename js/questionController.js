

mainModule.controller("questionCtrl", function ($scope) {

    $scope.ind = 0;
    $scope.selectedAnswer = undefined;
    $scope.alertMsg = "";
    $scope.correctAnswered = 0;
    $scope.answered = 0;

    /* Increment the question index to display the next question */
    $scope.getNextQuestion = function () {
        if($scope.ind < $scope.questArr.length-1){
            $scope.selectedAnswer = undefined;
            $scope.ind++;
        }
    };


    /* Terminates the question mode, and prepare for the main menu view to be displayed */
    $scope.exitQuestionMode = function () {
        $scope.ind = 0;
        $scope.answered = 0;
        $scope.correctAnswered = 0;
        $scope.alertMsg = "";
        $scope.selectedAnswer = undefined;
        return true;
    }


    /* Check if the selected answer matches correct answer */
    $scope.checkAnswer = function (answered, correctAlt) {
        if($scope.selectedAnswer !== undefined){
            return;
        }
        $scope.selectedAnswer = answered;
        $scope.answered++;
        if(correctAlt === answered){
            $scope.correctAnswered++;
        }
    }



});