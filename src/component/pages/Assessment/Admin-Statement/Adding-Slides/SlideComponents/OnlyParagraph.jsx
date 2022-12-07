import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import swal from 'sweetalert'
import { useState } from 'react';

const OnlyParagraph = ({ setOpen, setOpenQA, setTitle }) => {

    let [sDescription, setDescription] = useState("");
    let [sOptions] = useState([]);
    let [sMedia] = useState(null)


    let handleSubmit = () => {

        let newStatement = { sDescription, sMedia, sOptions };

        console.log(newStatement);

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
        <div>
            <div className='para-stmt'>
                <h5> Statement </h5>
                <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder='Enter Your Statement'
                    style={{ width: '100%', height: "150px", 
                            padding: "10px", outline: "none", 
                            border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                    onChange={(e) => { setDescription(e.target.value) }}
                />
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

export default OnlyParagraph
