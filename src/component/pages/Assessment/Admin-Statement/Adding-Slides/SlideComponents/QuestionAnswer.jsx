import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@material-ui/core'
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const QuestionAnswer = ({ setOpen, setOpenQA, setTitle }) => {

    let [textField, setTextField] = useState([])


    const handleAdd = () => {
        const abc = [...textField, []];
        setTextField(abc);
    }

    const handleChange = (onChangeValue, i) => {
        const inputData = [...textField];
        inputData[i] = onChangeValue.target.value;
        setTextField(inputData)
    }

    const handleDelete = (i) => {
        const delVal = [...textField];
        delVal.splice(i, 1);
        setTextField(delVal)
    }
    return (
        <div className='questionWithAns'>
            <div className='para-stmt' >
                <h5> Statement </h5>
                <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder='Enter Your Statement'
                    style={{ width: '100%', height: "150px", padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                />
            </div>
            <hr />
            <div>
                <h5> Option Details </h5>
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
                                                defaultValue={data}
                                                style={{ width: '100%', fontSize: 17, padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                                            />
                                        </TableCell>
                                        <TableCell align="center" style={{ fontSize: 17 }}> Yes or No </TableCell>
                                        <TableCell align="center">

                                            <TextareaAutosize
                                                maxRows={4}
                                                aria-label="maximum height"
                                                defaultValue={data}
                                                style={{ width: '100%', fontSize: 17, padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                                            />

                                        </TableCell>
                                        <TableCell align="center">
                                            <button style={{ height: "50px" }} onClick={() => { handleDelete(i) }} >
                                                <DeleteIcon />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                        <div style={{ margin: " 20px " }}>
                            <Button className=' btn btn-outline-success' style={{ width: "auto", height: "40px" }}
                                onClick={() => handleAdd()}
                            >
                                <IconButton>
                                    <AddIcon fontSize='small' style={{ color: "#A6D2AD" }} />
                                </IconButton>
                                Add Option
                            </Button>
                        </div>
                    </Table>
                </TableContainer>
            </div>
            <div className='tab-body-btns'>
                <Button className='btn btn-primary' 
                        onClick={() => { setOpen(false); setOpenQA(true); setTitle("Statement Manager") }}
                        style={{ width: "100px", height: "40px" }}
                >
                    ADD
                </Button>
            </div>
        </div>
    )
}

export default QuestionAnswer