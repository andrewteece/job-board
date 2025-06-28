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
  SidebarGroup,
} from '@/components/ui/sidebar';
import { AppSidebarClient } from './_AppSidebarClient';
import Link from 'next/link';
import { LogInIcon } from 'lucide-react';
// import { SignedIn, SignedOut } from '@clerk/nextjs';
import { SignedOut, SignedIn } from '@/services/clerk/components/SignInStatus';
import { SidebarUserButton } from '@/features/users/components/SidebarUserButton';

export default function HomePage() {
  return (
    <SidebarProvider className='overflow-y-hidden'>
      <AppSidebarClient>
        <Sidebar collapsible='icon' className='overflow-hidden'>
          <SidebarHeader className='flex-row'>
            <SidebarTrigger />
            <span className='text-xl text-nowrap'>WebDev Jobs</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SignedOut>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/sign-in'>
                        <LogInIcon />
                        <span>Log In</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SignedOut>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SignedIn>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarUserButton></SidebarUserButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </SignedIn>
        </Sidebar>
        <main className='flex-1'>abcdef</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}
