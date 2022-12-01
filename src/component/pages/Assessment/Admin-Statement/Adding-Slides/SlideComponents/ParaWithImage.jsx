import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button} from '@mui/material'

const ParaWithImage = ({ setOpen, setOpenQA, setTitle }) => {
    return (
        <div className='para-with-image'>
            <div className='para-stmt'>
                <h5> Statement </h5>
                <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder='Enter Your Statement'
                    style={{ width: '100%', height: "150px", padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                />
            </div>
            <hr />
            <div className='para-img' >
                <label>Upload the Image</label>
                <div className='file-input-img'>
                    <input id='slideIMG' accept=" image/png, image/jpeg  " type="file" />
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

export default ParaWithImage
