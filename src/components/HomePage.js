import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteData } from "../actions/data";
const HomePage = (props) => {
    const dispatch = useDispatch()

    const data = useSelector((state) => state.data)
    const handleSingleUser = (user) => {
        props.history.push("/singleuser", { user })
    }
    const handleDelete = (id) => {
        if (window.confirm("Do You Want to Delete this data")) {
            dispatch(deleteData(id))

        }

    }
    return (
        <div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <h1 style={{ textAlign: "center" }}>Fall 2020 -CS441 Web Tech Project</h1>
                <button style={{
                    border: "none",
                    padding: "10px 20px",
                    fontFamily: "sans-serif",
                    textTransform: "uppercase",
                    borderRadius: "5px",
                    cursor: "pointer",

                }} onClick={()=>props.history.push("/addnew")}>Add New Record</button>
            </div>
            {data.length == 0 ? <div class="story-card--recirc" >
                <h3 style={{ fontFamily: "sans-serif", textAlign: "center" }}>No Data at the moment</h3>
            </div> :
                data.map((el, index) => {
                    return (<div>

                        <div class="story-card--recirc" >
                            <div class="story-card--recirc__media" style={{ cursor: "pointer" }}
                                onClick={() => handleSingleUser(el)}>
                                <a style={{ cursor: "unset" }}>


                                    <img src={el.img}></img>
                                </a>

                            </div>
                            <div class="story-card--recirc__body">
                                <h1>{el.name}</h1>
                                <span>CMS:{el.cms}</span><br></br>
                                <a target="_blank" href={el.github}>
                                    <span>GitHub</span>

                                </a>

                            </div>
                            <div class="story-card--recirc__body">
                                <a style={{ cursor: "pointer" }} onClick={() => { props.history.push("/edit", { img: el.img, name: el.name, github: el.github, cms: el.cms, bio: el.bio, id: el.id }) }}>
                                    <span>Edit </span>
                                </a>
                                <br></br>
                                <a style={{ cursor: "pointer" }} onClick={() => handleDelete(el.id)}>
                                    <span>Delete </span>
                                </a>
                            </div>
                        </div>
                    </div>)
                })}
        </div>

    )
}
export default HomePage