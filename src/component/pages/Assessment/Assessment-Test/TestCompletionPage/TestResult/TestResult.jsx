import React from 'react'
import './testResult.css'
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


const TestResult = () => {
  return (
    <div className='test-result'>
      <div className="card test-card" >
        <div className="card-body">
          <div className='card-header'>
            <h5> Test Has Been Completed Successfully </h5>
          </div>
          <div className='card-result'>
            <p className="card-text"> Correct Anwsers : 12 </p>
            <p className="card-text"> Wrong Anwsers : 4 </p>
            <p className="card-text"> Points : 15/20 </p>
            <p className="card-text"> Percentage : 70% </p>
          </div>
          <hr />
          <div className='card-feedback'>
            <h6>Feedback</h6>
            <p>You've experienced how clean and professional your tests will look with SPIF </p>
          </div>
          <hr />

          <div className='certi-btn'>
            <Tooltip title="To Collect Your Certificate" placement='right'>
                <Link to='/certification-page'>
                  <button className="btn btn-primary card-link">Click here...</button>
                </Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestResult
