export type Question = {
    category: string;
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
    difficulty: string;
    type: string;
}
export type QuestionState = Question & { answers: string[] };

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  }
 export type QuestionsSchema = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}