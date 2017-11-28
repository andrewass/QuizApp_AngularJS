

/* Controller for collecting categories */
mainModule.controller("categoryCtrl", function ($scope, $http) {

    $scope.catArray = [];



    /*Parse the various categories*/
    $scope.parseCategories = function () {

        angular.forEach($scope.categories, function(value) {
            $scope.catArray.push( new Category(value.id, value.name) );
        });
    };



    /* Parse the questions of the selected category and difficulty */
    $scope.parseQuestions = function () {
        angular.forEach($scope.questions, function(value) {
            const q = value.question;
            const corr = value.correct_answer;
            const alts = [];
            for(var i=0; i<3; i++){
               alts.push( value.incorrect_answers[i]);
            }
            alts.push(corr);
            questArr.push( new Question(q, corr, alts) );
        });
        $scope.displayQuestion();
    };



    /*Load categories from opentdb.com */
    $scope.loadCat = function () {
        $http.get("https://opentdb.com/api_category.php")
            .then(function (response) {
                    $scope.categories = response.data.trivia_categories;
                    $scope.parseCategories();
                },
                function (response) {
                    alert("No categories found");
                });
    };


    /* Load questions from opentdb.com, of the selected category and difficulty */
    $scope.startClicked = function () {
        const url = "https://opentdb.com/api.php?amount=10&category="+$scope.selectedID+
            "&difficulty="+$scope.difficulty+"&type=multiple";
        $http.get(url)
            .then(function (response) {
                    $scope.questions = response.data.results;
                    $scope.parseQuestions();
                },
                function (response) {
                    alert("No questions found");
                });
    };
});





