import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProviders';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from 'widgets/PageError/ui/PageError';
var meta = {
    title: 'widget/PageError',
    // eslint-disable-next-line no-undef
    component: PageError,
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
