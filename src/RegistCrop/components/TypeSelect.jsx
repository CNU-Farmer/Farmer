import React from "react";
import PropTypes from 'prop-types';

import '../css/TypeSelect.css';

const TypeSelect = function ({ selectType }) {
    const type = [
        {
            id: 1,
            speciesEng: 'lettuce',
            speciesKo: '상추'
        },
        {
            id: 2,
            speciesEng: 'cherry tomato',
            speciesKo: '방울 토마토'
        },
        {
            id: 3,
            speciesEng: 'green onion',
            speciesKo: '대파'
        },
    ]
    return(
        <div className="type-select">
            {type.map((e) => 
                <button 
                    key={e.id}
                    className="type-select-btn" 
                    onClick={() => selectType({speciesEng: e.speciesEng, speciesKo: e.speciesKo})}>{e.speciesKo}</button>)}
        </div>
    )
};

TypeSelect.propTypes = {
    selectType: PropTypes.func.isRequired,
};

export default TypeSelect;