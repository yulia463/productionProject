import React from 'react';
import AboutIcon from 'shared/assets/icons/AboutUs.svg';
import MainIcon from 'shared/assets/icons/Main.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        icon: ProfileIcon,
        text: 'Профиль',
    },
];
