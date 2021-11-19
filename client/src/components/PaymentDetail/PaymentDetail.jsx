import React from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrderById } from '../../redux/actions/getOrderById';


export default function PaymentDetail() {

  const dispatch = useDispatch();
  const { id } = useParams();

  const paymentDetail = useSelector((state) => state.getOrder.getOrderId)
  console.log(paymentDetail);

  useEffect(() => {
    dispatch(getOrderById(id))
  }, [dispatch]);

    return (
        <div>
            <Navbar/>
            <div>
            <h4>SU COMPRA FUE EXITOSA!</h4>
            <br/><br/>
            <h5>Puede ver los detalles de su orden aquí:</h5>
            <br></br>
            {
              paymentDetail?.courses?.map(c => {
                return (
                <div>
                  <p>{c.title}</p>
                </div>
              )})
            }
            <div>{paymentDetail.price}</div>
            <div>{paymentDetail.payment}</div>
            </div>
            <Footer/>
        </div>
    )
}