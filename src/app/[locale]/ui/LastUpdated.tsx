'use client';

import clsx from 'clsx';
import { format } from 'date-fns';

export default function LastUpdated({ label, date }) {
    return (
        <div
            className={clsx(
                'bg-primary text-fgAlt text-200 font-mono',
                'mt-200 block px-300 py-200 text-center',
                'shadow-500 relative',
            )}
        >
            {label} {format(date, 'yyyy-MM-dd')}
        </div>
    );
}
