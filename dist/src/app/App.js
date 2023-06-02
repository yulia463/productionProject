var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProviders';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { Modal } from 'shared/ui/Modal/Modal';
var App = function () {
    var theme = useTheme().theme;
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    return (_jsx("div", __assign({ className: classNames('app', {}, [theme]) }, { children: _jsxs(Suspense, __assign({ fallback: "" }, { children: [_jsx(Navbar, {}), _jsx("button", __assign({ onClick: function () { return setIsOpen(true); } }, { children: " toggle " })), _jsx(Modal, { isOpen: isOpen, onClose: function () { return setIsOpen(false); } }), _jsxs("div", __assign({ className: "content-page" }, { children: [_jsx(Sidebar, {}), _jsx(AppRouter, {})] }))] })) })));
};
export default App;
