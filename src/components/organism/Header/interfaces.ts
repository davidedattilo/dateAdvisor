import { ReactNode } from 'react';

export interface IHeader {
    alt: string;
    src: string;
    width: number;
    height: number;
    href: string;
    title: string;
    children?: ReactNode[];
}
