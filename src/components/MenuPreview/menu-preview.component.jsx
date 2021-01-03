import React, { Component } from 'react';

import './menu-preview.styles.scss';

import MenuItem from '../MenuItem/menu-item.components';

import bathBombs from '../../assets/bathBombs.jpg';
import akcesoria from '../../assets/akcesoria.jpg';
import candle from '../../assets/candle.jpg';
import product from '../../assets/salt-sloik.jpg';



class MenuPreview extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [
                {
                key: "1",
                name: "SÓL DO KĄPIELI",
                image: `${product}`, 
                },
                {
                    key: "2",
                    name: "KULE",
                    image: `${bathBombs}`, 
                },
                {
                    key: "3",
                    name: "ŚWIECE",
                    image: `${candle}`, 
                },
                {
                    key: "4",
                    name: "AKCESORIA",
                    image: `${akcesoria}`, 
                },
            ]
        }
    };
    render() { 
        return ( 
            <div className="menu-container">
                {
                    this.state.items.map((item, idx) => (
                        <MenuItem key={idx}
                        name={item.name}
                        image={item.image}/>
                    ))
                }
            </div>
        );
    }
}
export default MenuPreview;