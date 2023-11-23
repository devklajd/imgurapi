import React, { Component } from 'react';

import classes from './spinner.module.css';

import Backdrop from '../Backdrop/Backdrop';

class Spinner extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate() {

    }

    render() {
        return (

            <>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={classes.Loader} style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                    display: this.props.show ? 'block' : 'none'

                }}>Loading...</div>

            </>


        )
    };
}

export default Spinner;