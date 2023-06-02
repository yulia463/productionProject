import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProviders';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
var meta = {
    title: 'widget/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
};
export default meta;
export var Primary = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};
export var Secondary = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};
export var PrimaryDark = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var SecondaryDark = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
