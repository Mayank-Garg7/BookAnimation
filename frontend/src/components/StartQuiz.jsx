import React from 'react'

const StartQuiz = ({ show, quiz }) => {
    const visibility = show ? "hidden" : "";
    return (
        <div className={`${visibility} bg-teal-600`}>
            {quiz.map(item => (
                <div>
                    <p className="text-xl">question: {item.q}</p>
                </div>
            ))}
        </div>
    )
}

export default StartQuiz
