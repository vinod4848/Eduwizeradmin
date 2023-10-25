import "bootstrap/dist/css/bootstrap.css";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
/*import 'font-awesome/css/font-awesome.min.css';*/
import "assets/fonts/simple-line-icons.css";
import "assets/scss/zest-admin.css";
import { connect } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
import indexRoutes from "routes/index.jsx";
import { persistor, store } from "./Redux";
import LoginPage from "./layouts/LoginPage";

const hist = createBrowserHistory();

var BASEDIR = process.env.REACT_APP_BASEDIR;

function PrivateRoute({ component: Component, loggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedIn ? <Component {...props} /> : <Redirect to={`${BASEDIR}/login`} />;
      }}
    />
  );
}

class RouteRender extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Switch>
        <Route exact path={`${BASEDIR}/login`} key={"1000"} component={LoginPage} />

        {/* {this.props.loginData ? ( */}
        {indexRoutes.map((prop, key) => {
          return (
            <PrivateRoute
              path={prop.path}
              key={key}
              component={prop.component}
              loggedIn={this.props.loginData}
            >
              {/* {prop.component} */}
            </PrivateRoute>
          );
        })}
        {/* ) : (
          <Redirect to={{ pathname: "/login" }} />
          // <LoginPage />
        )} */}
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginData: state.dataReducer.loginData,
  };
};

const ConnectedRouteRender = connect(mapStateToProps)(RouteRender);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router history={hist} basename={process.env.REACT_APP_BASEDIR}>
        <ConnectedRouteRender />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
