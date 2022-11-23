import React, { useState } from 'react'
// import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Popper, Typography } from '@material-ui/core'


const Questions = ({ questions, loading, currentPage }) => {

  const [answers, setAnswers] = useState("");

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

  const [anchor, setAnchor] =  useState(null);
 

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    // <div className='row px-3 '>
    <form className='px-3 question-form' >
      {
        questions.map((question, i) => {
          return (
            <div key={question.sStatementID} className='d-flex question'>
              <div className='body px-3'>
                <h3 className='w-100'>{question.order}. {question.sDescription}</h3>
                {
                  question.options.length === null &&
                  <div className='multi-q-details'>
                    <h3 className='w-100'>{question.sDescription1}</h3>
                    <p>{question.sText}</p>
                    <h3>{question.sPointsDesc}</h3>
                    <h3>{question.sPointsBrief}</h3>
                  </div>
                }
                {
                  question.options.map((option) => {                    
                    
                    const openPopover = (event) =>{
                      if (option.isAnswer === false) {
                        setAnchor(event.currentTarget)
                      }
                      else{
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
                      <div className="question-options" key={option.id}>
                
                        <label className='px-3 question-label' htmlFor={option.id} >
                          <input type="radio"
                            id={option.id} checked={option.selected}
                            name={question.sStatementID}
                            value={option.text}
                            onChange={ (e)=>{ setAnswers(e.target.value); } }
                            onClick={openPopover}
                          />
                           {option.text} 
                        </label>
                        

                        {/* When user click the wrong Answer(input)-->The Popup will display */}

                        <Popper
                          style={{ 
                            backgroundColor:"white",
                            borderRadius:"10px",
                            width:"600px",
                            color:"black",
                            fontWeight:"bolder",
                            marginLeft:"250px",
                            marginTop:"2px",
                            boxShadow:"3px 2px 1px 1px rgba(0,0,0,0.25), -3px 2px 1px 1px rgba(0,0,0,0.25)",
                            padding:"10px",
                          }} 
                          open={open}
                          anchorEl={anchor}
                        >
                          <div className='option-popper-title'>    
                            <Typography variant='h5'  >  The Reason for wrong answer </Typography>
                          </div>
                          <hr />
                          <Typography variant='h6' className='option-popper' > {option.isPrompt} </Typography>
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

      {
        
          <Link to='/test-result'>
            <button type="submit" class="btn btn-primary">Submit Test</button>
          </Link>

      }
    </form>
    // </div>
  )
}

export default Questions
