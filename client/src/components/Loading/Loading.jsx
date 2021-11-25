import React from 'react';
import style from './loading.module.css';
import RingLoader from "react-spinners/RingLoader";


const Loading = () => {
    return (
        <div className={style.loading}>
            <RingLoader/>
        </div>
    );
};

export default Loading;