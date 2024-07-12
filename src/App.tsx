import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {Model} from "./components/pages/Model";
import {Prices} from "./components/Prices";

export const PATH = {
    PAGE1: '/Adidas',
    PAGE2: '/Puma',
    PAGE3: '/Abibas',
    PAGE4: '/Prices',
    ERROR404: '/error404'
}

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div>
                        <NavLink to={PATH.PAGE1}
                                 className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                            Adidas
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={PATH.PAGE2}
                                 className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                            Puma
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={PATH.PAGE3}
                                 className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                            Abibas
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={PATH.PAGE4}
                                 className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                            Prices
                        </NavLink>
                    </div>

                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.PAGE4} element={<Prices/>}/>
                        <Route path={'/:brand/:id'} element={<Model/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                        {/* <Route path={PATH.ERROR404} element={<Error404/>}/>
                        <Route path={'/*'} element={<Navigate to={'/error404'}/>}/>*/}
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
