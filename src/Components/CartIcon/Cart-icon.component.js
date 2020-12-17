// DEPENDENCIES
import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../Redux/Cart/Cart-selectors';
import { createStructuredSelector } from 'reselect';

// COMPONENTS
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';

// FUNCTIONS
import { toggleCartHidden } from '../../Redux/Cart/Cart-actions';

// STYLE-SHEETS
import './Cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
