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

export default function HomePage() {
  return (
    <SidebarProvider className='overflow-y-hidden'>
      <Sidebar collapsible='icon' className='overflow-hidden'>
        <SidebarHeader className='flex-row'>
          <SidebarTrigger />
          <span className='text-xl text-nowrap'>WebDev Jobs</span>
        </SidebarHeader>
        <SidebarContent>test</SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>123</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <main className='flex-1'>abcdef</main>
    </SidebarProvider>
  );
}
