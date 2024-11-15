import React from "react";

export const SmChar =(props) =>{
    return(
<div className="col-10 col-md-4 col-lg-3  m-3">
<div className="card">
    <figure>
        <img className="img-fluid" src={props.img} alt={props.name} />
    </figure>
    <h1>{props.name}</h1>
</div>
</div>
  )  
}

