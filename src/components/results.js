import React, { useState } from 'react'
import data from '../db/data'
import Card from './card'

const Results = () => {
    const [index, setIndex] = useState(0)
    const [badanswer, setBadAnswer] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [showButton3, setShowButton3] = useState(false);


    const handleNext = () => {
        if (index === data.length-2) {
            setShowButton3(true)
        }
        setIndex(prevIndex => prevIndex + 1)
        if (data[index].rightAnswer === true) {
            setCorrectAnswer(prevCount => prevCount + 1)
        } else {
            if (data[index].rightAnswer === false) {
                setBadAnswer(prevCount2 => prevCount2 + 1)
            }
        }
      

    }
    const restartgame = () => {
        setIndex(0)
        setBadAnswer(0)
        setCorrectAnswer(0)
        setShowButton3(false)
    }

    return (
        <div>

            <Card img={data[index].img} description={data[index].description} count1={badanswer} count2={correctAnswer}
                button1={<button onClick={handleNext} disabled={index === data.length - 1}>bad</button>}
                button2={<button onClick={handleNext} disabled={index === data.length - 1}>correct</button>}
                button3={showButton3 && <button onClick={restartgame}>restartgame</button>}
            />
        </div>
    )
}

export default Results


