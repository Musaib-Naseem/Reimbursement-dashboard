import React,{useState,useEffect} from "react";
import "./container.css";
import image1 from "./images/img-1.jpg";
import {TextField} from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineEdit} from "react-icons/ai";
import {AiOutlineDelete} from "react-icons/ai";

import {FaRegTimesCircle} from "react-icons/fa";
import Data from "./data";
import Sdata from "./data";
import DashList from "./DashList";
import {Status} from "./Status";
import {AiFillClockCircle} from "react-icons/ai";
import {IoCheckmarkDoneCircle} from "react-icons/io";
import {BiError} from "react-icons/bi";
import {Attachment} from "./Attachment";
import ModalFirst from "./ModalFirst";
import Button from 'react-bootstrap/Button';

import Modal from "react-bootstrap/Modal";
import $ from "jquery";

// var table=document.getElementById("mytable");

// var len=table.rows.length;

const Container=()=>{


  const initialList=[
    {
    id:"a",
    Date:"15th Mar,2020",
    Requested:"23th Mar,2020",
    Type:"Accomodation",
    Reason:"Company Work",
    Amount:9000,
    Attachment:12,
    ReasonDialog:"",
    Status:'Pending'
    },
    
    {
      id:"b",
    Date:"18th Mar,2020",
    Requested:"23th Mar,2020",
    Type:"Wild Flowers",
    Reason:"Company Work",
    Amount:8000,
    Attachment:12,
    ReasonDialog:"",
    Status:'Pending'
    },
    
    {
      id:"c",
    Date:"17th Mar,2020",
    Requested:"23th Mar,2020",
    Type:"Accomodation",
    Reason:"Company Work",
    Amount:3000,
    Attachment:12,
    ReasonDialog:"",
    Status:'Accepted'
    },
    
    {
      id:"d",
    Date:"19th Mar,2020",
    Requested:"23th Mar,2020",
    Type:"Wild Flowers",
    Reason:"Company Work",
    Amount:5000,
    Attachment:12,
    ReasonDialog:"",
    Status:'Accepted'
     },
    
     {  
        id:"e",
        Date:"13th Mar,2020",
        Requested:"23th Mar,2020",
        Type:"Accomodation",
        Reason:"Company Work",
        Amount:7000,
        Attachment:12,
        ReasonDialog:"",
        Status:'Accepted'
        },
        
        {
          id:"f",
        Date:"18th Mar,2020",
        Requested:"23th Mar,2020",
        Type:"Accomodation",
        Reason:"Company Work",
        Amount:2000,
        Attachment:12,
        ReasonDialog:"",
        Status:'Accepted'
         },
    
         {
            id:"g",
            Date:"10th Mar,2020",
            Requested:"23th Mar,2020",
            Type:"Wild Flowers",
            Reason:"Company Work",
            Amount:10000,
            Attachment:12,
            ReasonDialog:"",
            Status:'Accepted'
            },
            
            {

              id:"h",
            Date:"13th Mar,2020",
            Requested:"23th Mar,2020",
            Type:"Wild Flowers",
            Reason:"Company Work",
            Amount:5000,
            Attachment:12,
            ReasonDialog:"Reason ?",
            Status:'Rejected'
             },
    ]


   

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (amount,type,date) => {
    
    
    setNewAmount(amount);
    setNewType(type);
    setNewDate(date)
    setShow(true);
  
  }


    const [reasonShow, setReasonShow] = useState(false);

    const ReasonHandleClose = () => setReasonShow(false);
    const ReasonHandleShow = () => {
      setReasonShow(true);
    
    }

    
  const [newDate,setNewDate] = useState('');
  // const [finalDate,setFinalDate] = useState('');

  const [newType,setNewType] = useState(' ');
  // const [finalType,setFinalType] = useState('');


  const [newAmount,setNewAmount] = useState('');
  // const [finalAmount,setFinalAmount] = useState('');
 

 const [list, setList] = useState(initialList);

 const [amountField,setAmountField] = useState();

  console.log(amountField);
 const fieldEvent=(e)=>{
 
   setAmountField(e.target.value);


 }

 const requestReimburse=()=>{

  setList((oldValues)=>{

    
      
     return  [...oldValues,{  
      id:"l",
      Date:"33th April,2020",
      Requested:"23th Mar,2020",
      Type:"Accomodation",
      Reason:"Company Work",
      Amount:582000,
      Attachment:12,
      ReasonDialog:"",
      Status:'Accepted'
      }];
  });
 }



var amount=" ",type=" ",date=" ";

useEffect(() => {
    
  // setNewAmount(oneAmount);
  // setFinalAmount(43);

}, [])

const [finalAmount,setFinalAmount] = useState();

  const [finalDate,setFinalDate] = useState();

  const [finalType,setFinalType] = useState();

  function setMoney(amount){

    setFinalAmount(amount);

  }
  

function FullList(val){

  const [finalAmount,setFinalAmount] = useState(val.Amount);

  const [finalDate,setFinalDate] = useState(val.Date);

  const [finalType,setFinalType] = useState(val.Type);

  function handleRemove(id) {
  
    const newList = list.filter((val) => val.id !== id);
   
    setList(newList);
    
    console.log(id);
  }
   
  // oneAmount=val.Amount;
  // twoAmount=val.Amount;
 

  
  
return(
 
  <>
 <tr key={val.id}>
 <td   >{finalDate}</td>
 <td >{val.Requested}</td>
 <td className="oddColor" Selected >{finalType}</td>
 <td className="nowrap oddColor">{val.Reason}</td>
 <td className="oddColor" >{finalAmount}</td>
 <td><Attachment>{val.Attachment} </Attachment></td>
 <td className="nowrap" style={{ cursor:'pointer', textDecoration:'underline'}}onClick={()=>ReasonHandleShow()}>{val.ReasonDialog}</td>
 <td><Status onClick={requestReimburse} >{val.Status}</Status></td>
 <td className="editIcon" onChange={()=>setMoney(val.Amount)} onClick={()=>handleShow(val.Amount,val.Type,val.Date)}><AiOutlineEdit /></td>
 <td className="deleteIcon" id='btn-del' onClick={() => handleRemove(val.id)}  ><AiOutlineDelete /></td>
 
 </tr>
  </>

);

}

const [selectedDate,setSelectedDate] = useState(null);




    

return(

    <>
    
    <div className="container-fluid container-padding" >
   
    <div className="container-fluid " >

    <div className="row" style={{ height:'100px'}}>
    
    <div className="col-md-6 col-sm-12"  >

    <p className="align-center"><i className="fa fa-inr"></i> <span className="header-text-left ">Reimbursement</span></p>

    </div>

    <div className="col-md-6 col-sm-12"  >

    <p className="header-text-right img-responsive img-circle header-float-left ">Employee Name &nbsp; &nbsp;<img height="30px" width="30px" src={image1} /> </p>

    </div>
    
    </div>
    </div>

    <div className="container-fluid box table-margin"  >
    
    <div className="row">
    
    <div className="col-lg-9 col-md-12"   >
    
    <p className="table-heading">Reimbursements Data</p>

    <table className="table table-thread " id="mytable"  >
    
  <thead className="table-thread">
    <tr className="table-thread">
      <th scope="col" className="nowrap">Date</th>
      <th scope="col" >Requested on</th>
      <th scope="col">Type</th>
      <th scope="col">Reason</th>
      <th scope="col">Amount</th>
      <th scope="col">Attached</th>
      <th scope="col"></th>
      <th scope="col">Status</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>



  <tbody>
  {
  list.map(FullList)
  }
  

  </tbody>
</table>


      <Modal show={show} className="borderNone" onHide={handleClose} >
        <Modal.Header className="borderNone" closeButton>
          <Modal.Title >Edit Reimbursement Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="padding-all">
        
        <label className="input-label">Expense Date (mm/dd/yy)</label>
        <input type="text" className="input-text" style={{ backgroundColor:'transparent'}} value={newDate} placeholder={newDate} onFocus={(e)=>e.target.type='date'} onChange={e=>{setNewDate(e.target.value)}} />
        {/* <input type="date" className="input-text" style={{ backgroundColor:'transparent'}} value={newDate} onFocus={(e)=>e.target.placeholder=""} onBlur={(e)=>e.target.placeholder=e.target.value}  onChange={e=>{setNewDate(e.target.value)}} /> */}
        
        <label className="input-label-type ">Type</label>

        <select name="type" id="type" className="input-text select_box" value={newType} onFocus={(e)=>e.target.placeholder=""} onBlur={(e)=>e.target.placeholder=e.target.value}  onChange={e=>{setNewType(e.target.value)}}>
        <option className="inval" value="" disabled selected hidden >{newType}</option>
        <option className="opt" value="Accomodation">Accomodation</option>
        <option className="opt" value="Wild Flowers">Wild Flowers</option>
        </select>

        <label className="input-label">Details</label>
        <input type="text" className="input-text" placeholder="Type in the details" onFocus={(e)=>e.target.placeholder=""} onBlur={ (e)=> e.target.placeholder="Type in the details"}/>
        
        <label className="input-label">Amount</label>
        <input type="text" className="input-text " value={newAmount} onFocus={(e)=>e.target.placeholder=""} onBlur={(e)=>e.target.placeholder=e.target.value}  onChange={e=>{setNewAmount(e.target.value)}}/>
        

        </Modal.Body>
        <Modal.Footer className="borderNone-footer">
          <Button variant="secondary" className="btn dialog-close-btn-style  btn-inline btn-aside" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  className="btn dialog-btn-style  btn-inline btn-aside" onClick={ ()=>{setFinalAmount(newAmount); handleClose()  }} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={reasonShow} className="borderNone " onHide={ReasonHandleClose} >
        <Modal.Header className="borderNone" closeButton>
          <Modal.Title className="reason-dialog-header" >Rejection Reason</Modal.Title>
        </Modal.Header>
        <Modal.Body className="padding-all">
        
        <p style={{ lineHeight:'2', fontWeight:'500', textAlign:'justify'}}>
          The reimbursement was being rejected due to invalid document that was provided by you please check again and upload a valid document.
        </p>

        </Modal.Body>
        <Modal.Footer className="borderNone-footer">
          <button variant="secondary" className=" reason-dialog-button" onClick={ReasonHandleClose}>
            Close Message
          </button>
  
        </Modal.Footer>
      </Modal>


    </div>

    <div className="col-lg-3 col-md-12 box-right" >
    
    <p className="aside-heading">Claim Reimbursement</p>

    <label className="input-label-type ">Type of reimbursement</label>

    <select name="type" id="type" className="input-text select_box">
    <option className="inval" value="" disabled selected hidden >Pick the type</option>
    <option className="opt" value="Accomodation">Accomodation</option>
    <option className="opt" value="Wild Flowers">Wild Flowers</option>
    </select>
    
    
    <label className="input-label">Expense Date</label>
    <input type="date" className="input-text" style={{ backgroundColor:'transparent'}}value={selectedDate} onChange={(e)=>setSelectedDate(e.target.value)} placeholder="Select Start Date" />
    {/* <DatePicker className="input-text date-picker" selected={selectedDate} onChange={date=>setSelectedDate(date)} placeholderText="Select Start Date"/> */}
    

    <label className="input-label">Details</label>
    <input type="text" className="input-text" placeholder="Type in the details" onFocus={(e)=>e.target.placeholder=""} onBlur={ (e)=> e.target.placeholder="Type in the details"}/>
    
    <label className="input-label">Amount</label>
    <input type="text" className="input-text " placeholder="Eg:8977" onFocus={(e)=>e.target.placeholder=""} onBlur={(e)=>e.target.placeholder="Eg:8977"} onChange={fieldEvent}/>

   <label for="file" className="file-container"> <AiOutlinePlusCircle className="plus" /> <span class="file-text">Add new File </span> <input  type="file" id="file" name="file" multiple /></label>
    <ul className="fileList"></ul>
   <button type="button" class="btn btn-style  btn-block btn-aside" onClick={requestReimburse}>Request Reimbursement</button>
    </div>
    
    </div>
    </div>

    </div>

    </>
);


}

export default Container;