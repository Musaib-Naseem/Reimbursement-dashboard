import React from "react";
import ReactDOM from "react-dom";
import "./Status.css";
import {AiFillClockCircle} from "react-icons/ai";
// import {IoCheckmarkDoneCircle} from "react-icons/io";
import {BiError} from "react-icons/bi";

export const Status=({children})=>{






var bgColor,color,iconName;
if(children == 'Pending'){

 bgColor='lightOrange';
 color='darkOrange';
 iconName=<AiFillClockCircle />;

}
else if(children == 'Accepted'){

    bgColor='lightGreen';
    color='darkGreen';
    iconName=<AiFillClockCircle />;

}else{

     bgColor='lightRed';
     color='darkRed';
    iconName=<BiError />;

}


return(

    <>
    
    <p className={` btn ${bgColor} ${color} `}><span className={`${color}`}>{iconName}</span> {children} </p>
    


    </>
);


}