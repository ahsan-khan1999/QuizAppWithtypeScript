import React from 'react'
import {QuestionsSchema} from '../Types/Type'


// first we have to specify this comp to a functioal comp then pass these type to this comp
const Questions: React.FC<QuestionsSchema> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => {
    return (
        <div>
            <p className="quesNum">{questionNumber} / {totalQuestions} </p>
            <p dangerouslySetInnerHTML={{ __html: question }} style={{fontSize:22,fontWeight:'bolder'}}/>
            <div>
                {
                    answers.map((answer,ind) => (
                        <div key={ind}>
                            <button disabled={userAnswer ? true : false } value={answer} onClick={callback} style={{height:80,backgroundColor:'pink',width:80}}>
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
