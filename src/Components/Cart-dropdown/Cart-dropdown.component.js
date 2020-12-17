// DEPENDENCIES
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// PAGES AND COMPONENTS
import CartItem from '../Cart-item/Cart-item';
import CustomButton from '../CustomButton/CutomButton.component';

// FUNCTIONS
import { selectCartItems } from '../../Redux/Cart/Cart-selectors';
import { toggleCartHidden } from '../../Redux/Cart/Cart-actions';

// STYLE-SHEETS
import './Cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className="cart-items">
            {cartItems.length
                ? (cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />)))
                : (<span className='empty-message'> Empty cart!</span>)}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())}}
        >GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
