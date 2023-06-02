import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProviders';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from 'widgets/Navbar';
var meta = {
    title: 'widget/Navbar',
    // eslint-disable-next-line no-undef
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export default meta;
export var Light = {
    args: {},
};
export var Dark = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
