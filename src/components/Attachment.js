import React from "react";
import "./Attachment.css";

export const Attachment=({children})=>{

    
var myInt = children;
var myArr = String(myInt).split("").map((myInt)=>{
    return Number(myInt)
  })

  myArr.pop();
  myArr.pop();

 


    
 


    function borderedNum(val){

    return(

        <>

        <p className="btn borderedBox">#{val}</p>

        </>
    );

    }

return(

    

    <>
    
    {

        myArr.map(borderedNum)
    }

    </>
);

}