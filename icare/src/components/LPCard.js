import React from 'react';

export default function LPCard(props){
    return(
        <div className="card w-96 bg-white shadow-xl flex flex-nowrap justify-center mx-3">
            <div className='text-center'>{props.image}</div>
            <div className="card-body justify-center">
                <h2 className="card-title text-primary font-extrabold text-center">{props.title}</h2>
            </div>
        </div>
    );
}