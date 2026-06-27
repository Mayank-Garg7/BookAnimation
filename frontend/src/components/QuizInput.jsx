import React, { useState } from 'react'
import data from '../mock/data.json'
import StartQuiz from './StartQuiz'

const QuizInput = () => {
    const [show, setShow] = useState(true)
    const [mode, setMode] = useState("")
    let questions = []
    const handleStart = () => {
        questions = data.filter((item) => item.section === mode)
        setShow(false)
    }
    return (
        <div className='container bg-teal-700 px-4 py-2 m-5 text-gray-300 justify-self-center-safe'>
            <h1 className='justify-self-center-safe text-2xl font-bold'>MPPEB Forest Guard / Jail Prahari</h1>
            <p className="justify-self-center-safe text-gray-400 text-xl">previous year questions</p>
            <select className='bg-teal-600 p-2 rounded-lg m-2 border-0'>
                <option value="">Full-Test</option>
                <option value="26 May 2023, Shift 1">26 May 2023, Shift 1</option>
            </select>
            <select value={mode} onChange={(e) => setMode(e.target.value)} className='bg-teal-600 p-2 rounded-lg m-2 border-0'>
                <option value="">Subject-wise</option>
                <option value="English">English</option>
                <option value="GK">GK</option>
                <option value="Maths">Maths</option>
                <option value="Hindi">Hindi</option>
            </select>
            <button onClick={handleStart}>Start quiz</button>
            <StartQuiz visibility={show} quiz = {questions} />

        </div>
    )
}

export default QuizInput
