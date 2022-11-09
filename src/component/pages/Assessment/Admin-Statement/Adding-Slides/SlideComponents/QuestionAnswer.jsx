import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@material-ui/core'
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';



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
        <div>
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
                <h5> Options </h5>
                <div className='options-container'>

                    {
                        textField.map((data, i) =>
                            <div className='option-field'>
                                <TextareaAutosize
                                    maxRows={4}
                                    aria-label="maximum height"
                                    defaultValue={data}
                                    placeholder='Enter a Option Value'
                                    style={{ width: '100%', padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                                    onChange={e => handleChange(e, i)}
                                />
                                <div className='row justify-content-center align-items-center' style={ { border:"#57C272 1px dotted", width:"75%", margin:"auto" } }>
                                    <div className='col-10' >
                                        <Typography style={ { color:"#62C2CF" } }> Prompt for Wrong Answer </Typography>
                                        
                                        <TextareaAutosize
                                            maxRows={4}
                                            aria-label="maximum height"
                                            defaultValue={data}
                                            placeholder='Enter the prompt'
                                            style={{ width: '100%', padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                                            onChange={e => handleChange(e, i)}
                                        />
                                    </div>
                                    <button className='col-2 h-50' onClick={() => { handleDelete(i) }} >
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                        )
                    }
                    <div>
                        <Button className='option-add-btn' style={{ width: "150px", height: "40px" }} 
                                variant="outlined" color='success'
                                onClick={() => handleAdd()}
                        >
                            <IconButton>
                                <AddIcon fontSize='small' style={{ color: "gray" }} />
                            </IconButton>
                            Add Option
                        </Button>
                    </div>
                </div>
            </div>
            <div className='tab-body-btns'>
                <Button variant='contained' color='primary' onClick={() => { setOpen(false); setOpenQA(true); setTitle("Statement Manager") }}>
                    ADD
                </Button>
            </div>
        </div>
    )
}

export default QuestionAnswer