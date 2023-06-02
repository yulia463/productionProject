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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
export var Counter = function () {
    var dispatch = useDispatch();
    var increment = function () {
        dispatch(counterActions.increment());
    };
    var decrement = function () {
        dispatch(counterActions.decrement());
    };
    var counterValue = useSelector(function (state) { return state.; });
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["value = ", counterValue] }), _jsx(Button, __assign({ onClick: increment }, { children: "increment" })), _jsx(Button, __assign({ onClick: decrement }, { children: "decrement" }))] }));
};
