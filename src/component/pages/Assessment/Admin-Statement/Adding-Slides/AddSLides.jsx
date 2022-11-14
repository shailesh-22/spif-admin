import React from 'react'
import './AddSlides.css'
import { useState } from 'react';
import Select from 'react-select'
import QuestionAnswer from './SlideComponents/QuestionAnswer';
import OnlyParagraph from './SlideComponents/OnlyParagraph';
import ParaWithImage from './SlideComponents/ParaWithImage';
import OnlyImage from './SlideComponents/OnlyImage';
import OnlyVideo from './SlideComponents/OnlyVideo';
import OnlyAudio from './SlideComponents/OnlyAudio';

const AddSLides = ({questions, setOpen, setOpenQA, setTitle }) => {

    
    
    const slideComponents = [
        { label : "Q/A", value : 1 },
        { label : "Para", value : 2 },
        { label : "ParaWithImage", value : 3 },
        { label : "Image", value : 4 },
        { label : "Video", value : 5 },
        { label : "Audio", value : 6 }
    ]
    
    const [ dropDownVal, setDropDownVal] = useState(  slideComponents.value )

    const handleChange = (e) =>{
        setDropDownVal(e.value);
     }


    const renderSlideContent = ()=>{

        switch (dropDownVal) 
        {
            case 1: return  <QuestionAnswer questions={questions} setOpen={setOpen} setOpenQA={setOpenQA} setTitle={setTitle} /> ;
                break;
            case 2: return  <OnlyParagraph questions={questions} setOpen={setOpen} setOpenQA={setOpenQA} setTitle={setTitle} /> ;
                break;
            case 3: return  <ParaWithImage questions={questions} setOpen={setOpen} setOpenQA={setOpenQA} setTitle={setTitle} /> ;
                break;
            case 4: return  <OnlyImage questions={questions} setOpen={setOpen} setOpenQA={setOpenQA} setTitle={setTitle} /> ;
                break;
            case 5: return  <OnlyVideo questions={questions} setOpen={setOpen} setOpenQA={setOpenQA} setTitle={setTitle} /> ;
                break;
            case 6: return  <OnlyAudio questions={questions} setOpen={setOpen} setOpenQA={setOpenQA} setTitle={setTitle} /> ;
                break;       
            default: return <QuestionAnswer questions={questions} setOpen={setOpen} setOpenQA={setOpenQA} setTitle={setTitle} /> ; 
                break;
        }
    }

    return (
        <div className='row p-0'>
            <div className="col-12  content">
                <div className='slide-summary'>
                    {/* <h4>Choose Your Slide</h4> */}
                    <Select className='col-12 select-slides' 
                            options={slideComponents} 
                            onChange={ handleChange }
                            placeholder={slideComponents[0].label}
                    />
                </div>

                { renderSlideContent() }
            </div>
        </div>
    )
   
}


export default AddSLides