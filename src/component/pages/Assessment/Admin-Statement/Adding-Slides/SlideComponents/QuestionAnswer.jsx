import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@mui/material'
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Switch, FormControlLabel } from '@mui/material'
import swal from 'sweetalert'

const QuestionAnswer = ({ questions, setOpen, setOpenQA, setTitle }) => {
   

    let [checked, setChecked] = useState(false)

    let handleAnswer = (event) => {
        setChecked(event.target.checked)
        setAnswer(event.checked.target)
    }
    
    // let [ sStatementID ] = useState("");
    let [sDescription, setDescription] = useState("");
    let [text, setText] = useState("");
    let [isAnswer, setAnswer] = useState(false);
    let [isPrompt, setPrompt] = useState("");
    let [textField, setTextField] = useState([{ text, isAnswer, isPrompt, value: 0 }])
    let [sImage] = useState(null);
    let [sVideo] = useState(null);
    let [sOptions] = useState(textField);
    let [sMedia] = useState(null)

    let handleSubmit = () => {

        let newStatement = { sDescription, sMedia , sImage, sVideo, sOptions };

        console.log(newStatement);

        // var duplicate = questions.some((m)=>{return m.sDescription === sDescription}) ;

        // if(duplicate===false)
        // {

        fetch(`http://103.160.153.38:8020/limens/statements_view/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newStatement),
        }).then(() => {
            swal({
                title: "Done!",
                text: `Added Successfully`,
                icon: "success",
                button: "Ok",
              });
            window.location.reload();
        })
        //}
        // else{
        //     alert("Statement Already Exist, Please add new Statement")
        // }


        // console.log("Hello");
    }

    //---------------------------------------------------------------
    
    // const handleChange = (e,i) => {
    //     const { optionName, value } = e.target ;
    //     const list = [ ...textField ]
    //     list[i][optionName] = value ;
    //     setTextField(list)
    //     console.log(list);
        
    //     // const inputData = [...textField];
    //     // inputData[i] = onChangeValue.target.value;
    //     // setTextField(inputData)
    // }

    const handleAdd = () => {
        setTextField( [ ...textField, { text, isAnswer, isPrompt, value: 0 } ] );       
    }

    const handleDelete = (i) => {
        const delVal = [...textField];
        delVal.splice(i, 1);
        setTextField(delVal)
    }

    //----------------------------------------------------------

    return (
        <div className='questionWithAns'>
            <div className='para-stmt'>
                <h5> Statement </h5>
                <TextareaAutosize
                    maxRows={4}
                    value={sDescription}
                    aria-label="maximum height"
                    placeholder='Enter Your Statement'
                    style={{ width: '100%', height: "150px", padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                    onChange={(e) => { setDescription(e.target.value) }}
                />
            </div>
            <hr />
            <div>
                <h5> Option Details { text } { isAnswer } { isPrompt } </h5>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead >
                            <TableRow sx={{ fontSize: 40 }} >
                                <TableCell align="center" sx={{ fontSize: 20, color: "#007A3E" }} > Options </TableCell>
                                <TableCell align="center" sx={{ fontSize: 20, color: "#007A3E" }}>Correct(Yes/No)</TableCell>
                                <TableCell align="center" sx={{ fontSize: 20, color: "#007A3E" }}>Prompt(Wrong Answer)</TableCell>
                                <TableCell align="center" sx={{ fontSize: 20, color: "#007A3E" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                textField.map((data, i) =>
                                    <TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <TextareaAutosize
                                                maxRows={4}
                                                aria-label="maximum height"
                                                value={text}
                                                style={{ width: '100%', fontSize: 17, padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                                                onChange={(e) => { setText(e.target.value) }}
                                            />
                                        </TableCell>
                                        <TableCell align="center" style={{ fontSize: 17 }}>
                                            <FormControlLabel
                                                control={<Switch checked={checked}
                                                    onChange={handleAnswer}
                                                    color='primary'
                                                />}
                                            />
                                        </TableCell>
                                        <TableCell align="center">

                                            <TextareaAutosize
                                                maxRows={4}
                                                aria-label="maximum height"
                                                value={ isPrompt }
                                                style={{ width: '100%', fontSize: 17, padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                                                onChange={(e) => { setPrompt(e.target.value) }}
                                            />

                                        </TableCell>
                                        <TableCell align="center">
                                            <button style={{ height: "50px", width: "50px", borderRadius: "10px" }} 
                                                    onClick={() => { handleDelete(i) }} >
                                                <DeleteIcon />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                        <div style={{ margin: " 20px " }}>
                            <Button className=' btn btn-outline-success' style={{ textAlign: "center", width: "auto", height: "40px" }}
                                onClick={() => handleAdd()}
                            >
                                Add Option
                            </Button>
                        </div>
                    </Table>
                </TableContainer>
            </div>
            <div className='tab-body-btns'>
                <button className='btn btn-primary'
                    onClick={() => { setOpen(false); setOpenQA(true); setTitle("Statement Manager"); handleSubmit() }}
                    style={{ width: "100px", height: "40px" }}
                >
                    ADD
                </button>
            </div>
        </div>
    )
}

export default QuestionAnswer