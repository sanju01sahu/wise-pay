import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppDispatch, RootState } from '../store/store';
import { Transactions } from '../Constants';


const initialState : Transactions = {
    recipient: "",
    recip_account: 0,
    referenceNum: 0,
    amount: 0,
    type: "",
    time: "",
    // id?:0,

}

export const TransactionPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [input, setInput] = useState<Transactions>(initialState)
    

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        
        setInput((prev) => {
          return { ...prev, [name]: value };
        });
      };



    const handleSubmit =(e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
    }


  return (
    <DIV>
    <div className='transaction-page'>
 
        <div className='transcation-btn'>
            <div>Add Transaction</div>
            
            <div>Subscription</div>
        </div>

        <div className='sending-form'>
            <h1>Add Transaction</h1>
            <form action="" onSubmit={handleSubmit} className='form-data'>
                <input 
                type="text" 
                name= "recipient" 
                placeholder='Recipient Name'
                />
                <br />
                <input 
                type="number" 
                name= 'recip_account' 
                placeholder='Account Number' 
                />
                <br />
                <input 
                type="text" 
                name='type' 
                placeholder='Type' 
                />
                <br />
                <input 
                type="number" 
                name='amount' 
                placeholder='Amount'
                />
                <br />

                <button>Add</button>         
            </form>
        </div>

        <div className='account-data'>
            <p>Remaining Budget</p>
            <h1>$2000.....</h1>
        </div>
      
      
    </div>
    </DIV>
  )
}

const DIV = styled.div`
.transcation-btn{
    width: 50%;
    display: flex;
    justify-content:space-between;
    margin-top: 40px;
    margin-left:50px;
    margin-bottom: 40px;
}
.transcation-btn>div{
    padding: 20px 50px 20px 50px;
    border-radius:43px;
    background-color: #23A6F0;
    border: none;
    color: white;
    /* font-size:large; */

}
.transcation-btn>div:hover{
    background-color: black;
    color:plum
}
.sending-form{
    width: 400px;
    height: 400px;
    background-color: gray;
    margin-left: 400px;

    border: 1px solid teal;

    
}
.sending-form:hover{
    background-color: #413e3e;
    color:white;
}

.form-data>input{
   width: 80%;
   height: 50px;
   font-size:30px
   

}
.form-data>button{
    background-color: #23A6F0;
    padding: 12px 25px 12px 25px;
    border-radius: 43px;
    margin-top: 20px;
    border: none;
    color: white;
}
.account-data{
    width: 400px;
    height: 150px;
    /* border: 1px solid red; */
    margin-top: 40px;
    margin-left:400px
}
.account-data{
    background-color: gray;


}
.account-data:hover{
    background-color: #413e3e;
    color: white;
}
.account-data>p{
    padding-top: 10px;
    font-weight:bold;
    font-size:20px;
}

.account-data>h1{

}

`;

