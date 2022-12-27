import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import './sortinSlides.css'
import { Button } from '@mui/material'

const SortingSlides = ({ questions, handleBack }) => {

    let [slides, setSlides] = useState(questions)

    //save reference for dragItem and dragOverItem
    let dragItem = useRef < Number > (null)
    let dragOverItem = useRef < Number > (null)

    //handle drag sorting
    const handleSort = () => {
        //duplicate item
        let _slideItems = [...slides]

        //remove and save the dragged item
        let draggedItemContent = _slideItems.splice(dragItem, 1)[0]

        //switch the position
        _slideItems.splice(dragOverItem, 0, draggedItemContent)

        //reset the position ref
        dragItem = null
        dragOverItem = null

        //update the actual array
        setSlides(_slideItems);

        // fetch("http://103.160.153.38:8020/limens/statements_view/", {
        //     method: "PUT",
        //     headers: {
        //     Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(slides),
        // })
    }


    return (
        <div>
            <div>
                {
                    slides.map((question, index) => {
                        return (
                            <div
                                className='slide-items'
                                style={{
                                    padding: "10px 5px",
                                    background: "#DCEEF1",
                                    margin: "10px 0",
                                    cursor: "move"
                                }}
                                draggable
                                onDragStart={(e) => dragItem = index}
                                onDragEnter={(e) => dragOverItem = index}
                                onDragEnd={handleSort}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                <span>&#9776;</span> {question.sDescription}
                            </div>
                        )
                    })
                }
            </div>
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
            </Button>
        </div>
    )
}

export default SortingSlides;
