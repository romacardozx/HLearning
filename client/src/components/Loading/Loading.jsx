import React from 'react';
import style from './loading.module.css';
// import BeatLoader from "react-spinners/BeatLoader";

import RingLoader from "react-spinners/RingLoader";


const Loading = () => {
    return (
        <div className={style.loading}>
            {/* <h5>Loading</h5><br/> */}
            <RingLoader/>
        </div>
    );
};

export default Loading;