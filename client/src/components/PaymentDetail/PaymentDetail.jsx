import React from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPaymentDetail } from '../../redux/actions/getPaymentDetail';


export default function PaymentDetail() {

  const dispatch = useDispatch();
  const { id } = useParams();

  const paymentDetail = useSelector((state) => state.paymentDet)
  console.log(paymentDetail)

  useEffect(() => {
    dispatch(getPaymentDetail(id))
  }, [dispatch]);

    return (
        <div>
            <Navbar/>
            <div>
            <h4></h4>
            <br/><br/>
            </div>
            <Footer/>
        </div>
    )
}