import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError/ui/BugButton';
var MainPage = function () {
    var t = useTranslation().t;
    return (_jsxs("div", { children: [_jsx(BugButton, {}), t('Главная страница')] }));
};
export default MainPage;
