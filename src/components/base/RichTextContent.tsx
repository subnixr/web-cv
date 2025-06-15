import { WithChildren } from '@/utils/components';
import clsx from 'clsx';

export type RichTextContentProps = WithChildren<object>;

export default function RichTextContent({
    className,
    children,
    ...props
}: RichTextContentProps) {
    if (typeof children !== 'string') throw new Error('Expected string');
    return (
        <div
            {...props}
            className={clsx('rich-text', className)}
            dangerouslySetInnerHTML={{ __html: children as string }}
        />
    );
}
