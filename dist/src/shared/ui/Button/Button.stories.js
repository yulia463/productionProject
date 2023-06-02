import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { ButtonTheme, Button, ButtonSize } from './Button';
var meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export default meta;
export var Primary = {
    args: {
        children: 'Text',
    },
};
export var Clear = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};
export var Outlined = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};
export var OutlinedSizeL = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};
export var OutlinedSizeXL = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};
export var BackgroundTheme = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var BackgroundInverted = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var Square = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var SquareSizeL = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var SquareSizeXl = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var OutlinedDark = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var ClearInverted = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};
