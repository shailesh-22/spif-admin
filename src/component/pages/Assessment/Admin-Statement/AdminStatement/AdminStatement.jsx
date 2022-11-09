import React from 'react'
import './adminStatement.css'
import { Button} from '@material-ui/core'
import { useState } from 'react';
import useFetch from '../../Custom Hook/useFetch';
import CircularProgress from '@mui/material/CircularProgress';
import AdminQuestionDetails from './AdminQuestionDetails';
import AddSLides from '../Adding-Slides/AddSLides';



const AdminStatement = () => {

    let { data: questions } = useFetch("http://localhost:3004/questions")

    const [open, setOpen] = useState(false);

    const [openQA, setOpenQA] = useState(true);

    const [ title, setTitle ] = useState("Statement Manager")

    const handleClickOpen = () => {
        setOpen(true);
        setOpenQA(false);
        setTitle("Slide Manager");
    };

    // const handleClose = () => {
    //     setOpen(false);



    // };

    if (!questions) return <CircularProgress size="5rem" style={{ display: "flex", margin: "auto" }} />

    return (
        <div className='container admin-statement p-4'>
            <div className='row'>
                <div className='header p-3' >
                    <h1 style={{ fontWeight: "bolder", letterSpacing: "1px" }}>STATEMENTS</h1>
                </div>
                <div className=' p-3 question-container'>
                    <div className='adding-part'>
                        <h3 style={{ fontSize: "25px", fontWeight: "bolder", letterSpacing: "1px" }}>
                            {title}
                        </h3>
                
                        { openQA &&
                            <Button style={{ width: "250px", height: "40px", 
                                         backgroundColor:"#00ad53", color:"white", 
                                         fontWeight:"800", letterSpacing:"1px", fontSize:"17px" }} 
                                onClick={handleClickOpen}
                            >
                                ADD SLIDES
                            </Button>
                        }
                        
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
                    { 
                        open && <AddSLides setOpen={setOpen} setOpenQA={setOpenQA} setTitle={ setTitle } /> 
                    }
                    {
                        openQA && <AdminQuestionDetails questions={questions} />
                    }

                </div>
            </div>
        </div>
    )
}

export default AdminStatement
