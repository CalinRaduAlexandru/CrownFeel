// DEPENDENCIES
import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import MenuItem from '../Menu-item/menu-item.component';

// FUNCTIONS
import { selectDirectorySections } from '../../Redux/Directory/Directory-selector';
import { createStructuredSelector } from 'reselect';

// STYLE-SHEETS
import '../Menu-item/menu-item.styles.scss';
import '../Directory/directory.styles.scss';


const Directory = ({ sections }) => (
    <div className='directory-menu'>
    {sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/>))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
