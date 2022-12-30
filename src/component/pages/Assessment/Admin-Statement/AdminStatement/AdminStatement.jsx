import React from "react";
import "./adminStatement.css";
import { Button } from '@mui/material'
import { useState } from "react";
import useFetch from "../../Custom Hook/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import AdminQuestionDetails from "./AdminQuestionDetails";
import AddSLides from "../Adding-Slides/AddSLides";
import Header from "../../../../Sidebar/Header";
import Menu2 from "../../../../Sidebar/Menu2";
// import DraggableComp from "../Sample Dragging Code/draggable";
import SortingSlides from "../Sample Dragging Code/SortingSlides";

const AdminStatement = () => {


  let { data: questions } = useFetch("http://103.160.153.38:8020/limens/statements_view/");

  const [open, setOpen] = useState(false);

  const [openQA, setOpenQA] = useState(true);

  const [openDD, setOpenDD] = useState(false);

  const [trapDD, setTrapDD] = useState(true);

  const [ slideBack, setSlideBack  ] = useState(false);

  const [title, setTitle] = useState("Statement");

  const handleClickOpen = () => {
    setOpen(true);
    setOpenQA(false);
    setSlideBack(true);
    setTitle("Slide Manager");
    setOpenDD(false)
  };

  const handleDragDrop = () => {
    setOpen(false);
    setOpenQA(true);
    setOpenDD(true);
    setTrapDD(false);
  };

  const handleBack = () => {
    setOpenDD(false);
    setOpenQA(true);
    setOpen(false);
    setTrapDD(true);
    setSlideBack(false);
    setTitle("Statement");
  }

  // const handleClose = () => {
  //     setOpen(false);

  // };

  // if (!questions)
  //   return (
  //     <h1 style={ { textAlign:"center", color:"#346BFF" } }>Loading...</h1>
  //   );

  return (
    <div>
      <div className="admin_sidebar">
        <Header />
        <Menu2 className="menu" />
      </div>

      <div className="content-wrapper admin-statement px-4">
        <div className="row">
          <div className=" p-3 question-container">
            <div className="adding-part">
              <h3
                style={{
                  fontSize: "25px",
                  fontWeight: "bolder",
                  letterSpacing: "1px",
                }}
              >
                {title}
              </h3>

              <div className="button-part">

                { slideBack &&
                  <Button
                  style={{
                    width: "200px",
                    height: "40px",
                    // backgroundColor: "#346BFF",
                    color: "#346BFF",
                    fontWeight: "800",
                    letterSpacing: "0.5px",
                    fontSize: "15px"
                  }}
                  onClick={handleBack}
                >
                  Back to Manager &#8592;
                </Button>}

                {openQA && (
                  <Button
                    style={{
                      width: "250px",
                      height: "40px",
                      // backgroundColor: "#346BFF",
                      color: "#346BFF",
                      fontWeight: "800",
                      letterSpacing: "0.5px",
                      fontSize: "15px",
                    }}
                    onClick={handleDragDrop}
                  >
                    Change Slide Order &#8593; &#8595;
                  </Button>
                )}

                {openQA && (
                  <Button
                    style={{
                      width: "250px",
                      height: "40px",
                      backgroundColor: "#346BFF",
                      color: "white",
                      fontWeight: "800",
                      letterSpacing: "1px",
                      fontSize: "17px",
                    }}
                    onClick={handleClickOpen}
                  >
                    ADD SLIDE
                  </Button>
                )}
              </div>
            </div>

            {/* <div>
                            <TextField
                                className='search-field' id="standard-basic"
                                label="Search here..." variant="standard"
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                            />
                        </div> */}

            {/* <CustomPaginationActionsTable questions={questions} totalQuestions={questions.length} /> */}

            {open && (
              <AddSLides
                questions={questions}
                setOpen={setOpen}
                setOpenQA={setOpenQA}
                setTitle={setTitle}
              />
            )} 
            {openQA && trapDD && <AdminQuestionDetails questions={questions} />}

            {openDD && <SortingSlides questions={questions} handleBack={handleBack} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStatement;
