import 'app/styles/index.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
var meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export default meta;
export var Primary = {
    args: {
        isOpen: true,
        children: 'Lorem',
    },
};
export var Dark = {
    args: {
        isOpen: true,
        children: 'Lorem',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
