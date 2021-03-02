import React from 'react';

import './sectionHeader.styles.scss';

import {ReactComponent as LineLeft} from '../../assets/line_left.svg';
import {ReactComponent as LineRight} from '../../assets/line_right.svg';

const SectionHeader = ({children, isDirectory}) => {
    return ( 
        <div className={`${isDirectory ? 'kategorie' : ''} subheader`}>
            <LineLeft/>
            <div className="mini-header">
              {children}
            </div>
            <LineRight/>
        </div> 
     );
}
export default SectionHeader;