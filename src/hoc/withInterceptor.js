import React, { Component } from 'react';

import Spinner from '../components/UI/Spinner/Spinner';
import Modal from '../components/UI/Modal/Modal';

const withInterceptor = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
            spinner: false
        }

        componentWillMount() {
            let self = this;
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null, spinner: true });
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(response => {
                this.setState({ error: null, spinner: false });
                return response;
            }, error => {
                if (error.response.status === 404) {
                    this.props.history.push('/404');
                }
                console.log(self.props.history);
                self.setState({ error: error, spinner: false });
                return error;
            });
        }


        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <>
                    <Spinner show={this.state.spinner}></Spinner>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}

export default withInterceptor;