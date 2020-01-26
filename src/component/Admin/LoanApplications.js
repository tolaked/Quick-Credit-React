import React,{useEffect,useState} from "react";
import {connect} from 'react-redux'; 
import styled from 'styled-components';
import {Card} from 'antd'

import {getAllLoans} from '../../state/actions/loans'

import "../pages.css";

const MainContent = ({getAllLoans,loans}) => {
  const [allLoans,setAllLoans] =useState([])
  

  useEffect(()=>{
    getAllLoans()
    setAllLoans(loans)
  },[loans.length])
  return (
    <Div>
      {/* <h3>All loan applications here</h3> */}
      {allLoans.map((loan,index)=>(
        <div key={index}>
          <StyledDiv>
            <h6>email:{loan.clientemail}</h6>
        <p>Amount: {loan.amount}</p>
      <p>Balance: {loan.balance}</p>
      <p>Payment installment: {loan.paymentinstallment}</p>
            </StyledDiv>
      {/* <h3>{loan.clientemail}</h3> */}
        </div>
      ))}
    </Div>
  );
};

const mapStateToProps = state =>({
  loans:state.loans.loans
})
export default connect(mapStateToProps,{getAllLoans})(MainContent);

const StyledDiv = styled.div`
background:white;
margin:0 auto;
margin-right: 10px;
`
const Div = styled.div`
display: grid;
width:100%;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
`