import type { StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProviders';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import MainPage from 'pages/MainPage/ui/MainPage';

const meta = {
    title: 'widget/MainPage',
    component: MainPage,
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
