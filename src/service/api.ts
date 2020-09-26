
// import Questions from "../Components/Questions";
import {Question} from '../Types/Type'

export const getQuestions = async (amount: number, level: string) => {
    let res = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${level}&type=multiple`);
    let { results } = await res.json();
    return results.map((question: Question) => (
        {
            ...question,
            answers:[...question.incorrect_answers,question.correct_answer],

        }
    ));
};

