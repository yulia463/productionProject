import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProviders';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';
var meta = {
    title: 'widget/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
};
export default meta;
export var Normal = {
    args: {},
};
export var Dark = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
