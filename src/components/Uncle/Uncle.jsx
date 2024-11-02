import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin name={"Tanim"} asset={asset}></Cousin>
                <Cousin name={"Tashfiq"}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;