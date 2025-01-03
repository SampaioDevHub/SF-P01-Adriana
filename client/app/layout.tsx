import type { Metadata } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppSidebar } from '@/components/sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adriana Showroom Management',
  description: 'Projeto em Desenvolvimento para Adriana Showroom - SampaioForce - 2025 - Todos os direitos reservados ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex h-screen">
            <AppSidebar />
            <SidebarInset className="flex-1">
              <header className="header flex items-center h-16 px-4 border-b">
              <div className="sidebar-trigger">
                    <SidebarTrigger />
                  </div>
                <div className="header-content flex items-center justify-between w-full max-w-screen-lg mx-auto">
                  {/* Logo Section */}
                  <div className="logo flex items-center">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} className="mr-3" />
                    <h1 className="text-lg font-semibold text-gray-800">SampaioForce</h1>
                  </div>

                  {/* Sidebar Trigger */}

                </div>
              </header>
              <main className="p-4">
                {children}
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

