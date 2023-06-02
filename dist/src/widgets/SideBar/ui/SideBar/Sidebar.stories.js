import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProviders';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from 'widgets/SideBar';
var meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
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
