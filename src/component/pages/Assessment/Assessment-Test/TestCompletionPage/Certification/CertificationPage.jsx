import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { saveAs } from 'file-saver'
import { useHistory } from 'react-router-dom';
import './certification.css'

const CertificationPage = () => {

    let navigate = useHistory();

    //    To Download image ----Have to install package
    //           npm install file-saver --save
    //    Then have to import "saveAs" funtion from file-saver

    const downloadImage = () => {
        saveAs('image_url', 'Creative Photography Participation Certificate Template-1.jpeg'); // Put your image url here.
        navigate.push('/dashboard')
    }


    return (
            <div className='certification' >
                <div className='certificate-body'>
                    <div className='certificate'>
                        <figure>
                            <img id='certificate' width='100%' height="700px" src="Creative Photography Participation Certificate Template-1.jpeg" alt="avatar" />
                        </figure>
                    </div>
                    <div className='certificate-btn'>
                        <Tooltip title="To Download Certificate" placement='right'>

                            <button onClick={downloadImage} className="btn btn-primary card-link">Download!</button>
                        </Tooltip>
                    </div>
                </div>
            </div>
    )
}

export default CertificationPage
