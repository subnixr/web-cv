'use client';

import { WithChildren, WithClassName } from '@/utils/components';
import clsx from 'clsx';
import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import IconCta from '../IconCta';

export type ModalPortalRootProps = WithClassName<{
    id?: string;
}>;

export function ModalPortalRoot({
    className,
    id = 'portal-modal',
    ...props
}: ModalPortalRootProps) {
    return <div {...props} className={className} id={id} />;
}

export type ModalPortalProps = WithChildren<{
    id?: string;
}>;

export function ModalPortal({
    id = 'portal-modal',
    children,
}: ModalPortalProps) {
    const ref = useRef<Element | null>(null);
    useEffect(() => {
        ref.current = document.querySelector(`#${id}`) ?? null;
    }, [id]);
    return ref.current && createPortal(children, ref.current);
}

export type ModalProps = WithChildren<{
    open: boolean;
    onClose?: () => void;
    backdropClassName?: string;
    title?: ReactNode;
    footer?: ReactNode;
    noClose?: boolean;
}>;

export default function Modal({
    open,
    onClose,
    backdropClassName,
    title,
    footer,
    noClose = false,
    className,
    children,
    ...props
}: ModalProps) {
    useEffect(() => {
        document.body.classList.toggle('scroll-lock', open);
    }, [open]);
    return (
        <ModalPortal>
            {open && (
                <div
                    className={clsx(
                        'z-modal fixed inset-0 h-full w-full',
                        'flex items-center justify-center',
                        'bg-modal-backdrop cursor-pointer',
                        backdropClassName,
                    )}
                    onClick={onClose}
                >
                    <div
                        {...props}
                        className={clsx(
                            'shadow-500 bg-bg cursor-auto rounded-[.4rem]',
                            className,
                        )}
                        onClick={evt => evt.stopPropagation()}
                    >
                        <div className="flex min-h-[2.6rem] gap-300">
                            <div className="flex-1">{title}</div>
                            {!noClose && (
                                <IconCta
                                    href=""
                                    onClick={onClose}
                                    type="close"
                                    iconClassName="icon-300"
                                />
                            )}
                        </div>
                        {children}
                        {footer && (
                            <div className="flex min-h-[2.6rem] items-end gap-300">
                                {footer}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </ModalPortal>
    );
}
