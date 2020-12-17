// DEPENDENCIES
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

// PAGES AND COMPONENTS
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component';
import HomePage from  './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/Shop.component';
import CheckoutPage from './Pages/Checkout/Checkout-component';
import Header from './Components/Header/HeaderComponent';

// FUNCTIONS
import { setCurrentUser } from './Redux/User/User-actions';
import { selectCurrentUser } from './Redux/User/User-selector';

// STYLE-SHEETS
import './Pages/Homepage/homepage.styles.scss';
import './App.css';

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {

        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              })
          });
        }

        setCurrentUser(userAuth);
      });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route exact path='/signin' render={() =>
                    this.props.currentUser?
                    (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
            </Switch>
            </div>
        );
    }

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
