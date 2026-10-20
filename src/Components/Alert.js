import React from "react";
function Alert(props){

    const capitalize=(word)=>{
     
        const lower=word.toLowerCase();//ye jo alert mesage me alet type hoga  uska pehla character capital banane k liye he
        return lower.charAt(0).toUpperCase()+lower.slice(1);
     
    }
    return(
       props.alert  && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
        </div>
    )
}
export default Alert;

//ye props .alert && esa isliye kiya kyuki all the jsx will be converted in js calls 