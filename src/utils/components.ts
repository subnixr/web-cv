import { PropsWithChildren } from 'react';

export type WithClassName<T> = T & {
    className?: string;
};

export type WithChildren<T> = PropsWithChildren<WithClassName<T>>;
