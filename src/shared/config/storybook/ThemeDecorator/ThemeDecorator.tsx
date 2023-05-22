import 'app/styles/index.scss';
import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import ThemeProvider from 'app/providers/ThemeProviders/ui/ThemeProvider';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>

);
