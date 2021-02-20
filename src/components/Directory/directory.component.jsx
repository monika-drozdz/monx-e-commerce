import React from 'react';

import './directory.styles.scss';

import MenuItem from '../MenuItem/menu-item.components';

import { connect } from 'react-redux';

const Directory = ({sections}) => {
        return ( 
            <div className="menu-container">
                {
                    sections.map(({id, ...otherSectionProps})=>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        );
    }


const mapStateToProps = (state) => ({
    sections: state.directory.sections
})

export default connect(mapStateToProps)(Directory);