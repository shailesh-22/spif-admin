import React, { useState } from 'react'
// import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Popper, Typography } from '@mui/material'
import QuestionHeader from './QuestionHeader';
import Timer from './Timer';
import CircularProgress from "@mui/material/CircularProgress";
import './Question1.css'


const Question1 = ({ questions, loading, questionPerPage, currentPage, setCurrentPage, indeOfFirstQues, totalQuestions }) => {

  const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalQuestions/questionPerPage); i++) 
    {
        pageNumber.push(i);       
    }

  const [answers, setAnswers] = useState("");

  const [ selected, setSelected ] = useState();
  const[ error, setError ] = useState(false);

  // const [open, setOpen] = useState(false);
  // const [score, setScore] = useState(0);
  // useEffect(()=>{
  //   if(localStorage.getItem("item")==null)  //if item array is not present before 
  //   {
  //       localStorage.setItem("item","[]")   //then add the wish
  //   }
  // },[]) 

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   console.log('hi');
  // }

  const [anchor, setAnchor] = useState(null);


  if (loading) {
    return <CircularProgress
    size="7rem"
    style={{ display: "flex", margin: "auto", height:"98.5vh" }}
    />
  }

  return (
    <div className='question-wrapper'>

      <QuestionHeader />

      <div>

        <div className='quesInfo'>
          <h4>  Slide {indeOfFirstQues + 1} of {totalQuestions}  </h4>
          <Timer />
        </div>


        <form className='px-3 question-form' >
          {
            questions.map((question, i) => {
              
              return (
                <div key={question.sStatementID} className='d-flex question'>
                  <div className='body  px-3'>
                    <h3 className='w-100'>{question.sDescription}</h3>
                    <hr />
                    {
                      question.sOptions.length === null &&
                      <div className='multi-q-details'>
                        <h3 className='w-100'>{question.sDescription1}</h3>
                        <p>{question.sText}</p>
                        <h3>{question.sPointsDesc}</h3>
                        <h3>{question.sPointsBrief}</h3>
                      </div>
                    }
                    {
                      question.sOptions.map((option,i) => {

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

                        const openPopover = (event) => {
                          if (option.isAnswer === false) {
                            setAnchor(event.currentTarget)
                          }
                          else {
                            setAnchor(null)
                          }
                        }

                        const handleClose = () => {
                          setAnchor(null);
                        };

                        const open = Boolean(anchor);

                        // const onSelect = (question, option) =>{



                        //   let newArrays = JSON.parse(localStorage.getItem("item") || '[]' )

                        //   let newArray = {'stid': question.sStatementID, 'answers': option.text,}

                        //   newArrays.push( newArray);

                        //   // let Key = 'stid';

                        //   // arrayUniqueByKey = [ ...new Map( LinalArray.map( item=> [item[Key],item])).values() ]

                        //   localStorage.setItem("item", JSON.stringify(newArrays));



                        // }

                        return (
                          <div className="question-options" key={i}>
                          
                            <label className='p-1 question-label' htmlFor={option.id} >
                              <input type="radio"
                                className={ `singleOption  ${ selected && handleSelect(option) }` }
                                id={option} checked={option.selected}
                                name={question.sStatementID}
                                value={option}
                                onChange={(e) => { setAnswers(e.target.value); }}
                                onClick={openPopover}
                                disabled= { selected }
                              />
                              {option.text}
                            </label>
                            {/* <Box>
                              { option.isPrompt }
                            </Box> */}


                            {/* When user click the wrong Answer(input)-->The Popup will display */}

                            <Popper
                              open={open}
                              anchorEl={anchor}
                              className='popper'                              
                            >
                              <div className='option-popper-title'>
                                <Typography >  The Reason for wrong answer </Typography>
                              </div>

                              <hr />

                              <Typography className='option-popper' > {option.isPrompt} </Typography>

                              <div className='popper-btn'>

                                <button onClick={handleClose} className="btn btn-primary" >OK</button>

                              </div>

                            </Popper>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
          {/* <div className='pagination'>
            
            { currentPage === pageNumber[0] ? null :
                <button id='previous-btn' onClick={( ()=>{ setCurrentPage(currentPage-1); })}  >
                    Previous
                </button>
            }
            {/* {
                pageNumber.map((number,index)=>(
                    <div>
                        <button key={index} onClick={()=> setCurrentPage(number)} className={ number == currentPage ? 'active' : ''} >
                            {number}
                        </button>
                    </div>
                    
                ))
            } */}
            {/* { currentPage === pageNumber.length? null :
                <button id='next-btn' onClick={( ()=>{ setCurrentPage(currentPage+1) })} >
                    Next
                </button>
            }
        </div> */}
        
          { currentPage === pageNumber.length? 
              (<Link to='/test-result'>
                <button type="submit" class="btn btn-primary">Submit Test</button>
              </Link>) : null
          }
        </form>
      </div>
    </div>
  )
}

export default Question1
