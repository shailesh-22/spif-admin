import React from 'react'

import { Button, TextareaAutosize } from '@mui/material'

const OnlyImage = ({ setOpen, setOpenQA, setTitle }) => {
    return (
        <div className='only-image'>
            <div className='para-stmt'>
                <h5> Description </h5>
                <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder='Enter Your Statement'
                    style={{ width: '100%', height: "50px", padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                />
            </div>
            <div className='para-img' >
                <label>Upload the Image</label>
                <div className='file-input-img'>
                    <input id='slideIMG' accept=" image/*" type="file" />
                </div>
            </div>
            <hr />
            <div className='tab-body-btns'>
                <Button variant='contained' color='primary' onClick={() => { setOpen(false); setOpenQA(true); setTitle("Statement Manager") }}>
                    ADD
                </Button>
            </div>
        </div>
    )
}

export default OnlyImage
