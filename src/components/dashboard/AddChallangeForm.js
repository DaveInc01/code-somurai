import React from "react"
import './formStyle.css'

const AddChallangeForm = () => {
    return(
        <form className="challange-form">
           <label>Title</label>
           <input type="text"></input> 
           <label>Description</label>
           <textarea cols={30} rows={5}></textarea>
           <label>Test code</label>
           <textarea cols={30} rows={5}></textarea>
           <button type="submit">Save</button> 
        </form>
    );
}

export default AddChallangeForm;