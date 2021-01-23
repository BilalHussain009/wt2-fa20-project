import React,{useState} from "react";
import {updateData} from '../actions/data'
import {useDispatch} from 'react-redux'
const EditPage = (props) => {
    const dispatch=useDispatch()
    const [name,setName]=useState(props.history.location.state.name)
    const [cms,setCms]=useState(props.history.location.state.cms)
    const [github,setGithub]=useState(props.history.location.state.github)
    const [bio,setBio]=useState(props.history.location.state.bio)
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleCms=(e)=>{
        setCms(e.target.value)
    }
    const handleGithub=(e)=>{
        setGithub(e.target.value)
    }
    const handleBio=(e)=>{
        setBio(e.target.value)
    }
    const handleUpdate=()=>{
        dispatch(updateData(props.history.location.state.id,{name,cms,github,bio}))
        props.history.push("/")
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Edit Record</h1>

            <div class="story-card--recirc" style={{ cursor: "pointer" }} >

                <div class="story-card--recirc__body" style={{ width: "80%", float: "none", margin: "auto" }}>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "5%" }}>
                        <label style={{ fontFamily: "sans-serif" }}>Name:</label>
                        <input type="text" style={{ padding: "10px", borderColor: "#7C8A8A", borderRadius: "4px" }}
                            value={name} onChange={handleName}/>
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
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label style={{ fontFamily: "sans-serif" }}>Bio</label>
                        <textarea cols="20" rows="7" type="text" style={{ padding: "10px", borderColor: "#7C8A8A", borderRadius: "4px" }}
                          onChange={handleBio}  value={bio} />
                    </div>
                    <a onClick={()=>handleUpdate()} >
                        <span style={{color:"black",marginTop:"5%"}}>Update </span>
                    </a>
                </div>
                
            </div>
        </div>
    )
}
export default EditPage;