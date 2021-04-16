import React from 'react';
import {GrFormClose} from 'react-icons/gr';


export default function CartHeader(props){
    return (
        <header className="row  center">
            <div>
           
                <h3>Your cart </h3>
            </div>
        
            <div>
                <button><GrFormClose/></button>
            </div>
        </header>
    )
}