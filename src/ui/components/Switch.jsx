import { forwardRef } from 'react';
import { Root, Thumb } from '@radix-ui/react-switch';

import { cn } from '@components/lib/utils.js';

const Switch = forwardRef(({ className, ...props }, ref) => (
  <Root
    className={cn(
      'peer inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-zinc-900 data-[state=unchecked]:bg-zinc-200 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=unchecked]:bg-zinc-800',
      className
    )}
    {...props}
    ref={ref}
  >
    <Thumb
      className={cn(
        'pointer-events-none flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0 dark:bg-zinc-950'
      )}
    />
  </Root>
));

Switch.displayName = Root.displayName;

export { Switch };
