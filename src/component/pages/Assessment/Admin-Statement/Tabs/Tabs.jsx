import React from 'react'
import { useState } from 'react'
import './tabs.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@material-ui/core'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const Tabs = ({ questions }) => {

    let [currentTab, setCurrentTab] = useState('1');

    let handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }

    let [textField, setTextField] = useState([])

    const handleAdd = () => {
        const addOption = [...textField, []];
        setTextField(addOption);
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

    const [list, setList] = useState(questions)

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);

        result.splice(endIndex, 0, removed);

        return result;
    }


    const onEnd = (result) => {
        // console.log(result);

        let sourceIndex = result.source.index;

        let destinationIndex = result.destination.index;

        setList(reorder(list, sourceIndex, destinationIndex));
    }

    return (
        <div className='container tabTypeQuestion'>
            <div className="tab">
                <DragDropContext onDragEnd={onEnd} >
                    <Droppable
                        droppableId='12345'
                        direction='horizontal'
                    >
                        {(provider, snapshot) => {
                            return (
                                <div
                                    ref={provider.innerRef}
                                >
                                    {
                                        list.map((question, index) => {
                                            return (
                                                <Draggable
                                                    draggableId={question.sStatementID}
                                                    key={question.sStatementID}
                                                    index={index}
                                                >
                                                    {(provider, snapshot) => {
                                                        return (
                                                            <div
                                                                ref={provider.innerRef}
                                                                {...provider.draggableProps}
                                                                {...provider.dragHandleProps}
                                                                className='draggable-tab'
                                                            >
                                                                <button
                                                                    key={index} id={question.sStatementID}
                                                                    disabled={currentTab === `${question.sStatementID}`}
                                                                    onClick={handleTabClick}                                                         
                                                                >
                                                                    Slide <span> {index + 1} </span>
                                                                </button>
                                                            </div>
                                                        )
                                                    }}
                                                </Draggable>
                                            )
                                        })
                                    }
                                    {provider.placeholder}
                                </div>
                            )
                        }}
                    </Droppable>
                </DragDropContext>
                {/* {
                    questions.map((tab, i) =>
                        <button
                            key={i} id={tab.sStatementID}
                            disabled={currentTab === `${tab.sStatementID}`}
                            onClick={handleTabClick}
                        >
                            Slide <span> {i + 1} </span>
                        </button>
                    )
                } */}
            </div>
            <div className="content">
                {
                    questions.map((tab, i) =>
                        <div key={i} >
                            {
                                currentTab === `${tab.sStatementID}` &&
                                <div>
                                    <div>
                                        <h5> Statement </h5>
                                        <TextareaAutosize
                                            maxRows={4}
                                            aria-label="maximum height"
                                            defaultValue={tab.sDescription}
                                            style={{ width: '100%', height: "150px", padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                                        />
                                    </div>
                                    <hr />
                                    { tab.options.length != 0 &&
                                    <div>
                                        <h5> Options </h5>
                                        <div className='options-container'>
                                            {
                                                tab.options.map((option, i) =>
                                                <div>
                                                    <div className='option-field'>
                                                        <TextareaAutosize
                                                            maxRows={4}
                                                            aria-label="maximum height"
                                                            defaultValue={option.text}
                                                            style={{ width: '100%', padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                                                            />
                                                        <div className='d-flex'>
                                                            {
                                                                option.isAnswer === false &&
                                                                <div className='prompt-field'>
                                                                    <Typography style={ { color:"#62C2CF" } }>Prompt For Wrong Answer</Typography>
                                                                    <TextareaAutosize
                                                                    maxRows={4}
                                                                    aria-label="maximum height"
                                                                    defaultValue={option.isPrompt}
                                                                    style={{ width: '100%', padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                                                                    />
                                                                </div>                                           
                                                            }
                                                            <button style={{ height:"50px" }} onClick={() => { handleDelete(i) }} >
                                                                <DeleteIcon />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                )

                                            }
                                            { 
                                                textField.map((data, i) =>
                                                    <div>
                                                        <div className='option-field'>
                                                            <TextareaAutosize
                                                                maxRows={4}
                                                                aria-label="maximum height"
                                                                defaultValue={data}
                                                                placeholder='Enter a Value'
                                                                style={{ width: '100%', padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                                                                onChange={e => handleChange(e, i)}
                                                                tabIndex={i}
                                                                />
                                                            <button onClick={() => { handleDelete(i) }} >
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
                                    }
                                    <div className='tab-body-btns'>
                                        <button className='btn btn-primary' >
                                            SAVE
                                        </button>
                                        <button className='btn btn-primary' >
                                            RESET
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default Tabs