import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './assessTest.css'
import Pagination from "../PaginationFile/Pagination";
import useFetch from "../../Custom Hook/useFetch";
// import ReactPaginate from 'react-paginate'
import CircularProgress from '@mui/material/CircularProgress';
import Header3 from "../../../../Sidebar/Header3";
import Question1 from "./Question1";

const AssessmentTest = () => {

  // const url = `http://103.160.153.38:8020/limens/statements_view/`

  const[questions,setQuestions] = useState([]);
  const[loading,setLoading] = useState(false);

  // let{data:questions, loading}  = useFetch("http://localhost:3004/questions")

  const [currentPage, setCurrentPage] = useState(1);
  const [questionPerPage] = useState(1);

  // useEffect(()=>{
  //   const fetchQuestions = async () =>{
  //     setLoading(true);
  //     const res = await axios.post(url);
  //     setQuestions(res.data);
  //     setLoading(false);
  //   }
    
  //   fetchQuestions();
  // },[]);

  useEffect(()=>{
        setLoading(true);

        axios.get('http://103.160.153.38:8020/limens/statements_view/')
        .then( res =>{
          setQuestions( res.data);
          setLoading(false)
        } )

    },[]);


  if(!questions) return <CircularProgress size="10rem" style={{ display:"flex", margin:"auto", height:"98.5vh" }}/>

  //Get Current Question

  const indeOfLastQues = currentPage * questionPerPage;
  const indeOfFirstQues = indeOfLastQues - questionPerPage;
  const currentQueston = questions.slice(indeOfFirstQues, indeOfLastQues);

  //--------------------------------------------------------------------------------------
  return (
    <div>
      <Header3 />
      <div className="assessment-test" style={{ marginTop: "64px" }}>
        {/* <div className='header w-100'>
          <h1>Online Assesment Test</h1>
          <div className='pageNo-Timer'>
            <h3> Question {indeOfFirstQues + 1} of {questions.length}</h3>
            <Timer />
          </div>
        </div> */}
        <div className="question-block" >
          <Question1
            questions={currentQueston} 
            loading={loading} 
            currentPage={currentPage}
            indeOfFirstQues={ indeOfFirstQues }
            totalQuestions={questions.length}
          />

          <Pagination
            questionPerPage={questionPerPage}
            totalQuestions={questions.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />

        </div>

      </div>
      {/* <div className="question-block">
              <Questions2 questions={questions} />
            </div> */}
    </div>
  )
}

export default AssessmentTest;









