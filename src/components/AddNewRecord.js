import React, { useState } from "react";
import { addNewRecord } from '../actions/data'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

const AddNewRecord = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [cms, setCms] = useState('')
    const [github, setGithub] = useState('')
    const [bio, setBio] = useState('')
    const [pic, setPic] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleCms = (e) => {
        setCms(e.target.value)
    }
    const handleGithub = (e) => {
        setGithub(e.target.value)
    }
    const handleBio = (e) => {
        setBio(e.target.value)
    }
    const handlePic = (e) => {
        setPic(e.target.value)
    }
    const handlAddNew = () => {
        dispatch(addNewRecord({name,cms,github,bio,img:pic,id:uuidv4()}))
        props.history.push("/")
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Add New Record</h1>

            <div class="story-card--recirc" style={{ cursor: "pointer" }} >

                <div class="story-card--recirc__body" style={{ width: "80%", float: "none", margin: "auto" }}>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "5%" }}>
                        <label style={{ fontFamily: "sans-serif" }}>Name:</label>
                        <input type="text" style={{ padding: "10px", borderColor: "#7C8A8A", borderRadius: "4px" }}
                            value={name} onChange={handleName} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "5%" }}>
                        <label style={{ fontFamily: "sans-serif" }}>CMS:</label>
                        <input type="text" style={{ padding: "10px", borderColor: "#7C8A8A", borderRadius: "4px" }}
                            onChange={handleCms} value={cms} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "5%" }}>
                        <label style={{ fontFamily: "sans-serif" }}>GitHub Link</label>
                        <input type="text" style={{ padding: "10px", borderColor: "#7C8A8A", borderRadius: "4px" }}
                            onChange={handleGithub} value={github} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "5%" }}>
                        <label style={{ fontFamily: "sans-serif" }}>Picture Link</label>
                        <input type="text" style={{ padding: "10px", borderColor: "#7C8A8A", borderRadius: "4px" }}
                            onChange={handlePic} value={pic} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label style={{ fontFamily: "sans-serif" }}>Bio</label>
                        <textarea cols="20" rows="7" type="text" style={{ padding: "10px", borderColor: "#7C8A8A", borderRadius: "4px" }}
                            onChange={handleBio} value={bio} />
                    </div>
                    <button style={{
                        border: "none",
                        padding: "10px 20px",
                        fontFamily: "sans-serif",
                        textTransform: "uppercase",
                        borderRadius: "5px",
                        cursor: "pointer",
                        backgroundColor:"#2c3e50",
                        color:'white',
                        marginTop:"20px"
                    }} onClick={() => {handlAddNew()}}>Add New Record</button>
                </div>

            </div>
        </div>)
}
export default AddNewRecord