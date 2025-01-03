import type { Metadata } from 'next'

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
      <head>
        {/* Colocando o script no topo da página, dentro da tag <head> */}
      </head>
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex h-screen">
            <AppSidebar /> {/* Ajuste da largura da sidebar para responsividade */}
            <SidebarInset className="flex-1">
              <header className="header flex items-center h-16 px-4 border-b">
                <div className="sidebar-trigger">
                  <SidebarTrigger  />
                </div>
                <div className="header-content flex items-center justify-between w-full max-w-screen-lg mx-auto">
                  {/* Logo Section */}
                  <div className="logo flex items-center">
                    <h1 className="text-lg font-semibold text-gray-800">Dashboard Em Desenvolvimento</h1>
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
