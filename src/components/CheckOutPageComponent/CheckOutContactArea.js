import React from "react";
import CheckOutHeader from "./CheckOutHeader";
import {
  Form,
  FloatingLabel,
  Row,
  Col,
  InputGroup,
  Button,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import style from "./CheckOutPageComponent.module.css";

const CheckOutContactArea = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="my-5 ">
      <CheckOutHeader />
      <div>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          {/* <Row className="mb-3"> */}
          <FloatingLabel
            className={style.imput_wrapper}
            controlId="emailorMobile"
            label="Email or mobile"
          >
            <Form.Control
              type="text"
              placeholder="Email or mobile phone number"
              autoComplete="off"
              size="sm"
              {...register("firstName", {
                required: true,
              })}
              isInvalid={errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
            This is test
          </Form.Control.Feedback>
          </FloatingLabel>
          
          {/* <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                {...register("firstName", {
                  required: true,                 
                })}
                // value={values.firstName}
                // onChange={handleChange}
                // isValid={errors.firstName && "Provide Name"}
                isInvalid={errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                  This is test
                </Form.Control.Feedback>
             
            </Form.Group> */}
          {/* <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group> */}
          <Button type="submit">Submit form</Button>
        </Form>
      </div>
    </div>
  );
};

export default CheckOutContactArea;
