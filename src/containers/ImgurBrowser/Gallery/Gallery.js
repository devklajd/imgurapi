import React, { Component } from 'react';
import Media from '../../../components/Media/Media';
import Header from '../../../components/Header/header'

import classes from './gallery.module.css'

class Gallery extends Component {

    state = {
        gallery: [
            {
                images: []
            }
        ]
    }

    componentDidMount() {
        this.props.onload(this.props);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.sect !== this.props.sect || prevProps.viral !== this.props.viral || prevProps.wnd !== this.props.wnd || prevProps.sortParam !== this.props.sortParam) {
            this.props.onload(this.props);
        }

    }
    sectionHandler(section) {
        this.props.handleSection(section.toLowerCase());
    }
    windowHandler(window) {
        this.props.handleWindow(window.toLowerCase());
    }
    sortHandler(sort) {
        this.props.handleSort(sort.toLowerCase());
    }
    viralChangeHandler(viralImageVisible) {
        viralImageVisible = !viralImageVisible;
        this.props.handleViralImageVisiblity(viralImageVisible);
    }

    postSelectedHandler = (id) => {
        this.props.history.push('/gallery/' + id);
    }

    render() {
        let gallery = <p style={{ textAlign: 'center' }}>Something went wrong!</p>,
            header = (
                <Header
                    nav="true"
                    section={this.props.sect}
                    window={this.props.wnd}
                    sort={this.props.sortParam}
                    showViral={this.props.viral}
                    viralChanged={(showViralImage) => { this.viralChangeHandler(showViralImage) }}
                    sectionClicked={(section) => this.sectionHandler(section)}
                    windowClicked={(window) => this.windowHandler(window)}
                    sortClicked={(sort) => this.sortHandler(sort)}
                ></Header>
            );

        gallery = (

            <div className={classes['gallery-container']}>

                <div className={classes['gallery-grid']}>
                    {this.props.gal.map((post, index) => {
                        let images, imageB;
                        if (post.images !== undefined && post.images[0].mp4 === undefined) {
                            imageB = { 'backgroundImage': 'url(' + post.images[0].link + ')' }
                            images = (
                                <div
                                    onClick={
                                        () => this.postSelectedHandler(post.id)
                                    }
                                    key={index} style={imageB} >
                                    <Media item={post}></Media>
                                </div>
                            )
                        }
                        return (images);
                    })
                    }
                </div>
            </div>
        );

        return (
            <>
                {header}
                {gallery}
            </>
        );

    }

}

export default Gallery;