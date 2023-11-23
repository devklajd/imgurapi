import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Gallery from './Gallery/Gallery';
import { getGallery } from '../../actions/gallery';
import { getSinglePost, clearPostState } from '../../actions/post';
import { handleSection } from '../../actions/section';
import { handleWindow } from '../../actions/window';
import { handleSort } from '../../actions/sort';
import { handleViralImageVisiblity } from '../../actions/viralImages';
import FouroFour from "../../components/404/404";

import FullPost from './FullPost/FullPost'

import { connect } from 'react-redux';
import withInterceptor from '../../hoc/withInterceptor';
import axios from 'axios';

class ImgurBrowser extends Component {

    render() {
        return (
            <>
                <Switch>
                    <Route path="/gallery" exact render={() => <Gallery {...this.props} />} />
                    <Route path={"/gallery/:id"} exact render={() => <FullPost {...this.props} />} />
                    <Route path={"/404"} exact render={() => <FouroFour />} />
                    <Redirect from="" exact to="/gallery" />
                    <Route component={FouroFour} />
                </Switch>

                {/* <Gallery /> */}
            </>
        )
    }


}

const mapStateToProps = state => {
    return {
        gal: state.gallery,
        sect: state.section,
        sortParam: state.sort,
        wnd: state.window,
        viral: state.showViral,
        album: state.post
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onload: (props) => dispatch(getGallery(props)),
        handleSection: (section) => dispatch(handleSection(section)),
        handleWindow: (section) => dispatch(handleWindow(section)),
        handleSort: (sort) => dispatch(handleSort(sort)),
        handleViralImageVisiblity: (visiblity) => dispatch(handleViralImageVisiblity(visiblity)),
        getPost: (id) => dispatch(getSinglePost(id)),
        clearPost: () => dispatch(clearPostState())
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withInterceptor(ImgurBrowser, axios)));


