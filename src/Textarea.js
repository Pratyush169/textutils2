import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textarea(props) {

    const [text, setText] = useState("");

    const handleupClick = () => {
        if (document.getSelection().toString() !== "") {
            let selectedtext = document.getSelection().toString();
            let selectednewtext = text.replaceAll(selectedtext, selectedtext.toUpperCase());
            setText(selectednewtext);
            props.showAlert("Converted To uppercase", "success");
            setTimeout(() => {
                props.showAlert(null);
            }, 1000);
            return;
        }
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted To uppercase", "success");
        setTimeout(() => {
            props.showAlert(null);
        }, 1000);
    }

    const handlelpClick = () => {
        if (document.getSelection().toString() !== "") {
            let selectedtext = document.getSelection().toString();
            let selectednewtext = text.replaceAll(selectedtext, selectedtext.toLowerCase());
            setText(selectednewtext);
            props.showAlert("Converted To lowercase", "success");
            setTimeout(() => {
                props.showAlert(null);
            }, 1000);
            return;
        }
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted To lowercase", "success");
        setTimeout(() => {
            props.showAlert(null);
        }, 1000);
    }
    const handleonchange = (event) => {
        // console.log("you entered something");
        setText(event.target.value)
    }

    function noOfwords() {

        let OUT = 0;
        let IN = 1;
        let state = OUT;
        let wc = 0;
        let i = 0;

        while (i < text.length) {
            if (text[i] === ' ' || text[i] === '\n' ||
                text[i] === '\t')
                state = OUT;
            else if (state === OUT) {
                state = IN;
                ++wc;
            }
            i++;
        }

        return wc;
    }

    return (
        <>
            <div className={`container`}>
                <div className="mb-3">
                    <h1 className="mb-3">{props.heading}</h1>
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === "dark" ? "light" : ""}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonchange}></textarea>
                </div>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleupClick} >Convert To uppercase</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlelpClick} >Convert To Lowercase</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={()=>{setText("")}} >Clear</button>
            </div>

            <div className="my-3 container">
                <h2>Your Text Summary</h2>
                <p>{noOfwords()} words and {text.length} characters</p>
            </div>
        </>
    )
}

Textarea.propTypes = {
    heading: PropTypes.string
}
