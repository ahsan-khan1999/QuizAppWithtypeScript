import React from 'react'


type QuestionsSchema = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}
// first we have to specify this comp to a functioal comp then pass these type to this comp
const Questions: React.FC<QuestionsSchema> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => {
    return (
        <div>
            <p className="quesNum">{questionNumber} / {totalQuestions} </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {
                    answers.map((answer,ind) => (
                        <div key={ind}>
                            <button disabled={userAnswer} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Questions;
