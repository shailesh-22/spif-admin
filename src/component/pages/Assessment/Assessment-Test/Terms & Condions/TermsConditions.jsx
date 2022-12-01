import React from 'react'
import './rules.css';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import Header3 from '../../../../Sidebar/Header3';
import { Paper } from '@mui/material'

const TermsConditions = () => {

  let [num, setNum] = useState("START THE TEST");

  let handleButton = ()=>{

        for (var i = 5; i >=1 ; i--) {
          setNum(i)     
        }        
  }


  return (
    <div  >
      <div>
        <Header3/>
      </div>
      <div className='terms_condition' style={{marginTop:"62px"}}>
        <div className='test-rules'>
          <h2>Welcome To Our Online Assesment</h2>

          <h4>This Test will contains 10 questions.</h4>
        <Paper elevation={16}>
          <div className='test-rule-list'>
            

            <h4>Rules:</h4>

            <ol>
                <li>Every Questions gives you some points</li>
                <li>You will have 10 mins to complete the test </li>
                <li>Strongly Agree with the statement as description of you</li>
                <li>Agree with the statement as description of you</li>
                <li>DisAgree with the statement as description of you</li>
                <li>Strongly DisAgree with the statement as description of you</li>
                <li>Neutral with the statement as description of you</li>
                <li>Revie button shos the Answered and Not Answered Question</li>
            </ol>

            <h2>All the Best!!</h2>

            <div className='tc-btn'>
              <Link to='/assessment-test'>
                <button onClick={{handleButton} }
                type="button" class="btn"> {num} </button>
              </Link>
            </div>

          </div>
        </Paper>

        </div>
        
      </div>
    </div>
  )
}

export default TermsConditions
