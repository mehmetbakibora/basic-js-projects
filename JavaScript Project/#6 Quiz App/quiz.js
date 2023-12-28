function Quiz(questions){
    this.questions = questions;
    this.questionIndex = 0;
    this.numberCorrectAnswers = 0;
}

Quiz.prototype.BringQuestion = function(){
    return this.questions[this.questionIndex];
}
