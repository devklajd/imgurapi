import React from 'react';
import * as sectionTypes from './sectionTypes';
import * as sortTypes from './sortTypes';
import * as windowTypes from './windowTypes';
import { Link } from 'react-router-dom';


import styles from './header.module.css';

const header = (props) => (
    <>
        <header className={styles.header}>
            <div className={[styles['header-wrapper'], styles['flex-grid-thirds']].join(' ')}>

                <div className={[styles['logo'], styles['col']].join(' ')}>
                    <Link to={'/gallery'}>
                        Demo App
                </Link>
                </div>
                {props.nav === "true" ?
                    <div className={styles.col}>
                        <nav className={styles.section}>
                            <ul>
                                <li
                                    className={(props.section === sectionTypes.SECTION_HOT) ? styles.active : ''}
                                    onClick={() => (props.sectionClicked(sectionTypes.SECTION_HOT))}>
                                    {sectionTypes.SECTION_HOT}</li>

                                <li className={(props.section === sectionTypes.SECTION_TOP) ? styles.active : ''}
                                    onClick={() => (props.sectionClicked(sectionTypes.SECTION_TOP))}>{sectionTypes.SECTION_TOP}</li>
                                <li className={(props.section === sectionTypes.SECTION_USER) ? styles.active : ''}
                                    onClick={() => (props.sectionClicked(sectionTypes.SECTION_USER))}>{sectionTypes.SECTION_USER}</li>
                            </ul>
                        </nav>
                    </div> : null
                }

                {props.section === sectionTypes.SECTION_USER ?
                    <div className={styles.col}>
                        <div className={styles.topDraw}>
                            <nav>
                                <ul>
                                    <li
                                        className={(props.sort === sortTypes.SORT_VIRAL) ? styles.active : ''}
                                        onClick={() => (props.sortClicked(sortTypes.SORT_VIRAL))}>
                                        {sortTypes.SORT_VIRAL}</li>

                                    <li className={(props.sort === sortTypes.SORT_TOP) ? styles.active : ''}
                                        onClick={() => (props.sortClicked(sortTypes.SORT_TOP))}>{sortTypes.SORT_TOP}</li>
                                    <li className={(props.sort === sortTypes.SORT_TIME) ? styles.active : ''}
                                        onClick={() => (props.sortClicked(sortTypes.SORT_TIME))}>{sortTypes.SORT_TIME}</li>
                                </ul>
                            </nav>
                        </div>
                    </div> : null
                }
                {props.section === sectionTypes.SECTION_TOP ?
                    <div className={styles.col}>
                        <div className={styles.topDraw}>
                            <nav className={styles.windowSort}>
                                <ul>
                                    <li
                                        className={(props.window === windowTypes.WINDOW_DAY) ? styles.active : ''}
                                        onClick={() => (props.windowClicked(windowTypes.WINDOW_DAY))}>
                                        {windowTypes.WINDOW_DAY}</li>
                                    <li
                                        className={(props.window === windowTypes.WINDOW_WEEK) ? styles.active : ''}
                                        onClick={() => (props.windowClicked(windowTypes.WINDOW_WEEK))}>
                                        {windowTypes.WINDOW_WEEK}</li>
                                    <li
                                        className={(props.window === windowTypes.WINDOW_MONTH) ? styles.active : ''}
                                        onClick={() => (props.windowClicked(windowTypes.WINDOW_MONTH))}>
                                        {windowTypes.WINDOW_MONTH}</li>
                                    <li
                                        className={(props.window === windowTypes.WINDOW_YEAR) ? styles.active : ''}
                                        onClick={() => (props.windowClicked(windowTypes.WINDOW_YEAR))}>
                                        {windowTypes.WINDOW_YEAR}</li>
                                    <li
                                        className={(props.window === windowTypes.WINDOW_ALL) ? styles.active : ''}
                                        onClick={() => (props.windowClicked(windowTypes.WINDOW_ALL))}>
                                        {windowTypes.WINDOW_ALL}</li>
                                </ul>
                            </nav>
                        </div>
                    </div> : null
                }

                {props.section === sectionTypes.SECTION_HOT ?
                    <div className={styles.col}>

                    </div> : null
                }

                {props.nav === 'true' ?
                    <div className={styles.col}>
                        <div className={styles.colContainer}>
                            <label className={styles.switch}>
                                <input type="checkbox"
                                    name="showViral"
                                    checked={props.showViral}
                                    onChange={() => props.viralChanged(props.showViral)} />
                                <span className={[styles.slider, styles.round].join(' ')}></span>
                            </label>
                            <span className={styles.viralLabel}>Show Viral Images {props.viral}</span>
                        </div>
                    </div> : null
                }
            </div>
        </header>
    </>
);

export default header;