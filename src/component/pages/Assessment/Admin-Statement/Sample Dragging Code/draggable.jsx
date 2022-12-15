import React from 'react'
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const DraggableComp = ({ questions }) => {

    const [list, setList] = useState(questions)

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);

        result.splice(endIndex, 0, removed);

        return result;
    }


    const onEnd = (result) => {
        console.log(result);

        let sourceIndex = result.source.index;

        let destinationIndex = result.destination.index;

        setList(reorder(list, sourceIndex, destinationIndex));
    }

    return (
        <div>
            <DragDropContext onDragEnd={onEnd} >
                <Droppable
                    droppableId='12345'
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
                                                        >
                                                            <div
                                                                style={{
                                                                    padding: "10px 0",
                                                                    background: "gray",
                                                                    margin: "10px 0"
                                                                }}
                                            
                                                            >
                                                                {question.sDescription}
                                                            </div>
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

        </div>
    )
}

export default DraggableComp