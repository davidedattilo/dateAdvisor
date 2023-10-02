import React from 'react';
import { themes } from '@storybook/theming';

import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
    configurable: true,
    value: (props) => <img alt={props.alt} src={props.src} />,
});

export const decorators = [
    (Story) => {
        return (
            <>
                <Story />
            </>
        );
    },
];
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    darkMode: {
        stylePreview: true,
        darkClass: 'night-mode',
        lightClass: 'light-mode',
        dark: {
            ...themes.dark,
            colorPrimary: '#B5007D',
            colorSecondary: '#333c42',

            // UI
            appBg: '#222',
            appContentBg: '#333c42',
            appBorderColor: '#fff',
            appBorderRadius: 10,

            // Typography
            fontBase: 'Lato',
            fontCode: 'monospace',

            // Text colors
            textColor: '#fff',
            textInverseColor: 'purple',

            // Toolbar default and active colors
            textMutedColor: '#ebebeb',
            barTextColor: '#fff',
            barSelectedColor: '#222',
            barBg: 'linear-gradient(to right,#FF9E00 0%,#FF0000 35%,#B5007D 60%,#21429C 85%,#0071FF 100%);',

            // Form colors
            inputBg: '#333c42',
            inputBorder: '#f8f8f8',
            inputTextColor: '#fff',
            inputBorderRadius: 10,

            // Brand
            brandUrl: 'https://dateAdvisor.it',
            brandImage: '',
        },
        light: {
            ...themes.normal,
            brandImage: '',
        },
    },
    options: {
        storySort: {
            method: 'alphabetical',
            order: ['Introduction', 'Documentation', 'Electrons', 'Atoms', 'Molecules', 'Organisms', '*'],
        },
    },
};
