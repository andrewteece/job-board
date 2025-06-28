// 'use client';

// import { SidebarTrigger } from '@/components/ui/sidebar';
// import { useIsMobile } from '@/hooks/use-mobile';
// import { ReactNode } from 'react';

// export function AppSidebarClient({ children }: { children: ReactNode }) {
//   const { isMobile } = useIsMobile();

//   if (isMobile) {
//     return (
//       <div className='flex flex-col w-full'>
//         <div className='p-2 border-b flex items-center gap-1'>
//           <SidebarTrigger />
//           <span className='text-xl'>WebDev Jobs</span>
//         </div>
//         <div className='flex-1 flex'>{children}</div>
//       </div>
//     ) : (
//       <div className='flex w-full min-h-screen'>{children}</div>
//     );
//   }

// }
'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { ReactNode } from 'react';

export function AppSidebarClient({ children }: { children: ReactNode }) {
  const { isMobile } = useIsMobile();

  return isMobile ? (
    <div className='flex flex-col w-full'>
      <div className='p-2 border-b flex items-center gap-1'>
        <SidebarTrigger />
        <span className='text-xl'>WebDev Jobs</span>
      </div>
      <div className='flex-1 flex'>{children}</div>
    </div>
  ) : (
    // 💡 Ensure consistent wrapper for desktop layout
    <div className='flex w-full min-h-screen'>{children}</div>
  );
}
