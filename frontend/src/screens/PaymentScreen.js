import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer.js";
import CheckoutSteps from "../components/CheckoutSteps.js";
import { savePaymentMethod } from "../actions/cartActions.js";
import Meta from "../components/Meta.js";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress) history.push("/shipping");
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <><Meta title="Payment Details"/>
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend">Select Method</Form.Label>

            <Col>
              <Form.Check
                type="radio"
                label="PayPal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>

              <Form.Check
                type="radio"
                label="Razorpay"
                id="Razorpay"
                name="paymentMethod"
                value="Razorpay"
                disabled={true}
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>

            <Button type="submit" variant="primary">
              Proceed to Payment
            </Button>
          </Form.Group>
        </Form>
      </FormContainer>
    </>
  );
};

export default PaymentScreen;
