import React, {useState, useEffect} from 'react';
import toe from '../norfolk-legs.jpeg';

const LargeToe = () => {

    return (
        <div className="App">
          <div>
            <img
                alt=""
                src={toe}
                width="1000em"
                height="1000em"
                className="d-inline-block align-top"
                />
          </div>
        </div>
      );
}

export default LargeToe;