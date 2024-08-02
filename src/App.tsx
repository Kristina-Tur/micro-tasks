import React from 'react';
import styles from "./components/Site.module.css";
import {NavLink, Outlet} from "react-router-dom";
import {ProtectedPage} from "./components/pages/ProtectedPage";

export const PATH = {
    Adidas: '/Adidas',
    Puma: '/Puma',
    Abibas: '/Abibas',
    Prices: '/Prices',
    Model: '/:brand/:id',
    Protected: '/protected',
    Login: '/login',
    ERROR: '/error'
}

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div>
                        <NavLink to={PATH.Adidas}
                                 className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                            Adidas
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={PATH.Puma}
                                 className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                            Puma
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={PATH.Abibas}
                                 className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                            Abibas
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={PATH.Prices}
                                 className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                            Prices
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={PATH.Protected}
                                 className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                            ProtectedPage
                        </NavLink>
                    </div>

                </div>
                <div className={styles.content}>
                    <Outlet/>
                    {/*<Routes>
                        <Route path={'/'} element={<Navigate to={PATH.Adidas}/>}/>
                        <Route path={PATH.Adidas} element={<Adidas/>}/>
                        <Route path={PATH.Puma} element={<Puma/>}/>
                        <Route path={PATH.Abibas} element={<Abibas/>}/>
                        <Route path={PATH.Prices} element={<Prices/>}/>
                        <Route path={'/:brand/:id'} element={<Model/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>*/}
                    {/* <Route path={PATH.ERROR404} element={<Error404/>}/>
                        <Route path={'/*'} element={<Navigate to={'/error404'}/>}/>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
