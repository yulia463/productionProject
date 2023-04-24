import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError/ui/BugButton';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
