import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase(); 
        setText(newText)
        props.showAlert("Converted to Upper case!","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case!","success")
    }
    const handleClearClick = () => {
        // let newText = "";
        setText("");
        props.showAlert("Text is cleared!","success")
    }
    const handleSortClick = () =>{
        let num = text.match(/\d+/g)
        if(num) {
            // let newText = num.sort((a, b) => a-b).join(', ');
            for(let i=0; i<num.length - 1; i++) {
                for(let j=0; j<num.length -1 -i; j++) {
                    if(num[j] > num[j+1]){
                        let temp = num[j];
                        num[j] = num[j+1];
                        num[j+1] = temp;
                    }
                }
            }


            setText(num.join(', '))
            props.showAlert("Number is sorted!","success")
        } else {
            props.showAlert("No any number exist!","warning")
        }
    }
    const handleSpace = () => {
        setText(text.replace(/\s+/g, " "))
        props.showAlert("Extra spaces removed!","success")
    }
    const handleMostOccurence = () => {
        let num = text.match(/\d+/g)
        if(num) {
            // let newText = num.sort((a, b) => a-b).join(', ');
            let freqObj = {};
            let count = 0; let freqNum;

            for(let number of num) {
                freqObj[number] = (freqObj[number] || 0) + 1;

                if(freqObj[number] > count) {
                    count = freqObj[number];
                    freqNum = number;
                }
            }
            setText(num + "\nMost frequent number is: " + freqNum + "\nand it's occurence is: " + count)
            props.showAlert("Get the frequent number!","success")
        } else {
            props.showAlert("No any number exist!","warning")
        }
    }
    const handleSecondMostOccurence = () => {
        let num = text.match(/\d+/g)
        if(num) {
            // let newText = num.sort((a, b) => a-b).join(', ');
            let freqObj = {};
            let count = 0; let freqNum;

            for(let number of num) {
                freqObj[number] = (freqObj[number] || 0) + 1;

                if(freqObj[number] > count) {
                    count = freqObj[number];
                    freqNum = number;
                }
            }
            let arr = Object.values(freqObj).sort((a,b) => a-b);
            let secondFreqCount = arr[arr.length - 2];
            let secondFreqNum = Object.keys(freqObj).find( key => freqObj[key] === secondFreqCount);


            console.log(Object.values(freqObj).sort((a,b) => a-b))
            console.log(secondFreqCount)
            console.log(secondFreqNum)
            console.log(Object.entries(freqObj).sort((a, b) => b[1] - a[1]))
            setText(num + "\nSecond Most Occurence number is: " + secondFreqNum + "\nand it's occurence is: " + secondFreqCount)
            props.showAlert("Get the Second Most Occurence!","success")
        } else {
            props.showAlert("No any number exist!","warning")
        }
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className={`container text-${props.mode === "dark" ? "light" : "dark"}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea value={text} onChange={handleOnChange} className={`form-control bg-${props.mode === "dark" ? "secondary" : "light"} text-${props.mode === "dark" ? "light" : "dark"}`} id="convert" rows="8"></textarea>
            </div>
            <button className="btn btn-primary me-3" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary me-3" onClick={handleLowerClick}>Convert to LowerCase</button>
            <button className="btn btn-primary me-3" onClick={handleClearClick}>Clear words</button>
            <button className="btn btn-primary me-3" onClick={handleSortClick}>Sort the numbers</button>
            <button className="btn btn-primary me-3" onClick={handleSpace}>Remove Extra spaces</button>
            <button className="btn btn-primary " onClick={handleMostOccurence}>Most Occurence Element</button>
            <button className="btn btn-primary mt-3" onClick={handleSecondMostOccurence}>Second Most Occurence</button>
        </div>
        <div className={`container my-3 text-${props.mode === "dark" ? "light" : "dark"}`}>
            <h3>Your text summery</h3>
            <p>{text.trim().replace(/\s+/g, " ").split(" ").length} words and {text.length} characters</p>
        </div>
        </>
    )
}