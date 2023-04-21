import React, {Suspense} from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProviders";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/Navbar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app',{},[theme])}>

           <NavBar/>
            <AppRouter/>

        </div>
    );
};

export default App;
