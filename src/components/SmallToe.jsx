import React, {useState, useEffect} from 'react';
import toe from '../norfolk-legs.jpeg';

const SmallToe = () => {

    return (
        <div className="App">
          <div>
            <img
                alt=""
                src={toe}
                width="100em"
                height="100em"
                className="d-inline-block align-top"
                />
          </div>
        </div>
      );
}

export default SmallToe;