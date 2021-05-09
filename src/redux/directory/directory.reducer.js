import bathBombs from '../../assets/bathBombs.jpg';
import akcesoria from '../../assets/akcesoria.jpg';
import candle from '../../assets/candle-directory.jpg';
import product from '../../assets/salt-sloik.jpg';

const INITIAL_STATE = {
    sections: [
        {
            id: "1",
            title: "ŚWIECE",
            imageUrl: `${candle}`, 
            linkUrl: 'shop/candles',
        },
        {
            id: "2",
            title: "SÓL DO KĄPIELI",
            imageUrl: `${product}`, 
            linkUrl: 'shop/salts',
        },
        {
            id: "3",
            title: "KULE",
            imageUrl: `${bathBombs}`, 
            linkUrl: 'shop/bathbombs',
        },
        {
            id: "4",
            title: "ZAPACHY",
            imageUrl: `${akcesoria}`, 
            linkUrl: 'shop/zapachy',
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
        return state;
    }
}

export default directoryReducer;