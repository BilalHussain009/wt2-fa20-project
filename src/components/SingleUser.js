import React from 'react'
const SingleUser=(props)=>{
    const data=props.history.location.state.user
    return(
        <div>
            <h1 style={{ textAlign: "center" }}>{data.name}'s Profile</h1>
            
                <div>

                    <div class="story-card--recirc" >
                        <div class="story-card--recirc__media" 
                            >
                            <a style={{ cursor: "unset" }}>


                                <img src={data.img}></img>
                            </a>

                        </div>
                        <div class="story-card--recirc__body">
                            <h1>{data.name}</h1>
                            <span>CMS:{data.cms}</span><br></br>
                            <a href={data.github}>
                                <span>GitHub</span>

                            </a>

                        </div>
                        <div class="story-card--recirc__body">
                            <p style={{fontFamily:"sans-serif",color:"#7C8A8A"}}>Bio: {data.bio}</p>

                        </div>
                    </div>
                </div>
        
        </div>
    )
}
export default SingleUser