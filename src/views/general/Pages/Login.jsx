import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Formik } from "formik";
import { login } from "../../../Services/api";
import { connect } from "react-redux";
import { loginData } from "../../../Redux/Actions/dataAction";

class Login extends React.Component {
  callLogin = async (values, setSubmitting) => {
    try {
      if (
        !(values.userName === "integrate360@gmail.com" || values.userName === "mehul.nakoda14@gmail.com")
      ) {
        console.log("no access");
        return;
      }
      const loginResp = await login(values);
      if (loginResp.data.success) {
        this.props.loginDispatch(loginResp.data.session);
        console.log("loginResp.data.success==", loginResp.data);
        this.props.history.push("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setSubmitting(false);
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <Row className="justify-content-center">
          <Col xs={12} md={6} xl={4}>
            <div className="login-wrapper">
              <div id="login" className="login loginpage p-4 shadow-sm rounded" style={{ border: "1px solid #ddd" }}>
                <h1 className="text-center mb-4">Eduwizer - Admin Panel</h1>
                <Formik
                  initialValues={{ userName: "", password: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.userName) {
                      errors.userName = "Required";
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userName)) {
                      errors.userName = "Invalid username";
                    }
                    if (!values.password) {
                      errors.password = "Required";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    this.callLogin(values, setSubmitting);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <FormGroup className="mb-3">
                        <Label for="user_name">Username</Label>
                        <Input
                          type="text"
                          id="user_name"
                          className="form-control"
                          name="userName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.userName}
                        />
                        {errors.userName && touched.userName && (
                          <div className="text-danger mt-1">{errors.userName}</div>
                        )}
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Label for="user_pass">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          id="user_pass"
                          className="form-control"
                        />
                        {errors.password && touched.password && (
                          <div className="text-danger mt-1">{errors.password}</div>
                        )}
                      </FormGroup>
                      <Button
                        color="primary"
                        className="btn-block"
                        disabled={isSubmitting || !!Object.keys(errors).length}
                      >
                        Sign In
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginDispatch: (data) => dispatch(loginData(data)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
