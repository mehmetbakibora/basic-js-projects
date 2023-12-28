function Question(QuestionText,AnswerOptions,CorrectAnswer){
    this.QuestionText = QuestionText;
    this.AnswerOptions = AnswerOptions;
    this.CorrectAnswer = CorrectAnswer;

}

Question.prototype.AnswerCheck = function(answer){
    return answer === this.CorrectAnswer;
}

let questions = [
    new Question('1-Which is a javascript package management application ?', {A: ' Node.js', B: ' TypeScript', C: ' Npm', D: ' Nugget'},'C'),
    new Question('2-Which .net package management application is it ?', {A: ' Node.js', B: ' Nuget', C: ' Npm', D: ' TypeScript'},'B'),
    new Question('3-Which of the following is evaluated on the backend side ?', {A: ' Node.js', B: ' TypeScript', C: ' Angular', D: ' React'},'A'),
    new Question('4-Which programming language does javascript not use ?', {A: ' React', B: ' Angular', C: ' Vuejs', D: ' Asp.net'},'D'),
];
