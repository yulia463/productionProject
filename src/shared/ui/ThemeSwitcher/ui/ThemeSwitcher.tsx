import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProviders';
import LightIcon from 'shared/assets/icons/themeLight.svg';
import DarkIcon from 'shared/assets/icons/themeDark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}

        </Button>
    );
};
