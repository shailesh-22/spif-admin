import { Button } from '@material-ui/core';
import { Error } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import QuestionHeader from './QuestionHeader';
import './Questions2.css'
import Timer from './Timer';

const Questions2 = ({ questions }) => {

    // const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [score, setScore] = useState(0);
    // const [clicked, setClicked] = useState(false);
    // const [showScore, setShowScore] = useState(false);

    // const handleCorrectAnswer = (isCorrect) => {
    //     if (isCorrect) {
    //         setScore(score + 1);
    //     }
    //     setClicked(true);
    // }

    // const handleNextQuestion = () => {
    //     setClicked(false);
    //     if (currentQuestion < questions.length - 1) {
    //         setCurrentQuestion(currentQuestion + 1)
    //     }
    //     else {
    //         setShowScore(true);
    //     }
    // }
    // const handlePreviousQuestion = () => {
    //     if (currentQuestion < questions.length - 1) {
    //         setCurrentQuestion(currentQuestion - 1)
    //     }
    // }

    const [ currentQues, setCurrentQues ] = useState(0);

    const [ selected, setSelected ] = useState();
    const[ error, setError ] = useState(false);

    
    const handleNext = ()=>{
        if (selected) {
            setCurrentQues( currentQues + 1 );
            setSelected();
        } 
        // else if( ( !selected ) && questions.options.length !== 0 ) 
        // {
        //     setError( "Please Select an Option" )
        // }
        else 
        {
            setError( "Please Select an Option" )
        }
    }

    return (
        <div className='question-wrapper'>
            {/* {
                showScore ? (
                    <div>
                        <div>
                            Completed
                        </div>
                        <div>
                            Your Score : { score }/ { questions.length-1 }
                        </div>
                        
                    </div>
                ) : (
                    <div>
                        <div>
                            <div className='question-section-wrapper'>
                                <div className='question-count'>
                                    Question {currentQuestion + 1} of {questions.length}
                                </div>
                                <div className='question'>
                                    {
                                        questions[currentQuestion].sDescription
                                    }
                                </div>
                            </div>
                            <div className='answer-section-wrapper'>
                                {
                                    questions[currentQuestion].options.map((answerOption, i) => (
                                        <li className='answer-list' key={i}>
                                            <button className={ `answer-button ${ clicked && answerOption.isAnswer ? "correct" : "incorrect" }  ` }
                                                onClick={ ()=>{ handleCorrectAnswer(answerOption.isAnswer)}} 
                                            >
                                                {answerOption.text}
                                            </button>
                                        </li>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <button className='next-btn' onClick={handleNextQuestion}  >
                                NEXT
                            </button>
                            <button className='next-btn' onClick={handlePreviousQuestion}  >
                                PREVIOUS
                            </button>
                        </div>
                    </div>
                )} */}

            <QuestionHeader/>

            <div className='currentQuestions'>
                <div className='quesInfo'>
                    <h4>  Slide { currentQues + 1 } of { questions.length }  </h4>
                    <Timer/>
                </div>

                <div>
                    <h1> Question { currentQues+1 } </h1>

                    <div className='singleQuestion'>

                        <h2> { questions[currentQues].sDescription } </h2>
                        <div className='options'>
                            { error && <Error/> }
                            {
                                questions[currentQues].options.map((option,index)=>{

                                    const handleSelect = (i) =>{
                                        if( selected === i && option.isAnswer === true ){
                                            return "select";
                                        }
                                        else if( selected === i && option.isAnswer === false ){
                                            return "wrong"
                                        }
                                        else{

                                        }
                                    }

                                    const handleCheck = (i) =>{
                                        setSelected( i );
                                        setError( false );
                                    }

                                    return(
                                    <button
                                        onClick={ ( )=>{ handleCheck(option) } } 
                                        className={ `singleOption  ${ selected && handleSelect(option) }` } 
                                        key={index}
                                        disabled={ selected }
                                    >
                                        { option.text }
                                    </button>)
                                } )
                            }
                        </div>
                        <div className='controls'>
                            { 
                                questions.length>=1 && questions.length-1 ? 
                                (
                                    <Button  
                                        variant='contained'
                                        color='primary'
                                        size='larger'
                                        style={{ width:"100%" }}
                                        onClick={ handleNext }
                                    >
                                        NEXT
                                    </Button>
                                ):
                                (
                                    <Button>SUBMIT TEST</Button>
                                )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions2
