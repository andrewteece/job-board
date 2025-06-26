import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AppSidebarClient } from './_AppSidebarClient';
import Link from 'next/link';
import { LogInIcon } from 'lucide-react';
import { SignedIn } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <SidebarProvider className='overflow-y-hidden'>
      <AppSidebarClient>
        <Sidebar collapsible='icon' className='overflow-hidden'>
          <SidebarHeader className='flex-row'>
            <SidebarTrigger />
            <span className='text-xl text-nowrap'>WebDev Jobs</span>
          </SidebarHeader>
          <SidebarContent>test</SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SignedIn>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href='/sign-in'>
                      <LogInIcon />
                      <span>Log In</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SignedIn>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className='flex-1'>abcdef</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}
