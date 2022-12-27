import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button} from '@mui/material'
import swal from 'sweetalert'
import { useState } from 'react';


const ParaWithImage = ({ setOpen, setOpenQA, setTitle }) => {

    let [sDescription, setDescription] = useState("");
    let [sMedia, setMedia] = useState(null)
    let [sOptions] = useState([]);


    let handleSubmit = () => {

        var newStatement = { sDescription, sMedia, sOptions };


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
    }


    return (
        <div className='para-with-image'>
            <div className='para-stmt'>
                <h5> Statement </h5>
                <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder='Enter Your Statement'
                    style={{ width: '100%', height: "150px", padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                    onChange={(e) => { setDescription(e.target.value) }}
                />
            </div>
            <hr />
            <div className='para-img' >
                <label>Upload the Image</label>
                <div className='file-input-img'>
                    <input id='slideIMG' accept="image/png, image/jpeg " type="file"
                        onChange={(e) => { setMedia(e.target.files[0]) }}
                    />
                </div>
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

export default ParaWithImage
