import type { StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProviders';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from 'pages/AboutPage/ui/AboutPage';

const meta = {
    title: 'widget/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
