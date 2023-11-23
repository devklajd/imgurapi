import React from 'react';
// import styles from './Layout.module.css'

const layout = (props) => (

    <>
        <main>
            {props.children}
        </main>
    </>
);


export default layout;