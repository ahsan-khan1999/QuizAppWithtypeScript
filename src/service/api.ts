import { shuffleArray } from './shuffle';
// import Questions from "../Components/Questions";

export const getQuestions = async (amount: number, level: string) => {
    let res = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${level}&type=multiple`);
    let { results } = await res.json();
    return results.map((question: Question) => (
        {
            ...question,
            answers:shuffleArray([...question.incorrect_answers,question.correct_answer]),

        }
    ));
};

export type Question = {
    category: string;
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
    difficulty: string;
    type: string;
}
export type QuestionState = Question & { answers: string[] };