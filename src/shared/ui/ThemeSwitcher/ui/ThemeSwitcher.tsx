import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProviders';
import LightIcon from 'shared/assets/svg/themeLight.svg';
import DarkIcon from 'shared/assets/svg/themeDark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}

        </Button>
    );
};
