import React, { Suspense, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProviders';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { Modal } from 'shared/ui/Modal/Modal';

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>

            <Suspense fallback="">
                <Navbar />
                <button onClick={() => setIsOpen(true)}> toggle </button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
