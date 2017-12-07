

class Category{
    constructor(id, cat){
        this.id = id;
        this.cat = cat;
    }
}


class Question{
    constructor(quest, correct, alts){
        this.question = quest;
        this.correct = correct;
        this.alts = alts;
    }
}


/* Shuffle the order of the elements in an array */
function shuffle(array){

    for(let i=0; i<array.length; i++){
        let randNumb = Math.floor( Math.random() * array.length);
        //alert(randNumb);
        let temp = array[i];
        array[i] = array[randNumb];
        array[randNumb] = temp;
    }
    return array;
}

