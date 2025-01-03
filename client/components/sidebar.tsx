/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, LayoutDashboard, Users, Package, UserPlus, Settings, User, Palette, DollarSign, FileText, BarChart, CreditCard } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarFooter,
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const menuItems = [
  { name: 'Home', href: '/', icon: LayoutDashboard },
  {
    name: 'Financeiro',
    icon: DollarSign,
    submenu: [
      { 
        name: 'Tipos Despesas', 
        href: '/financeiro/cadastros', 
        icon: FileText,
      },
      { 
        name: 'Contas Bancárias', 
        href: '/financeiro/movimentacoes', 
        icon: CreditCard,
      },
      { 
        name: 'Lançar Receitas', // Renomeado para garantir chave única
        href: '/financeiro/relatorios', 
        icon: BarChart,
      },
      { 
        name: 'Receitas', // Renomeado para garantir chave única
        href: '/financeiro/relatorios', 
        icon: BarChart,
      },
      { 
        name: 'Relatório ', // Renomeado para garantir chave única
        href: '/financeiro/relatorios', 
        icon: BarChart,
      },
      { 
        name: 'Saldo Inicial', // Renomeado para garantir chave única
        href: '/financeiro/relatorios', 
        icon: BarChart,
      },
    ],
  },
  {
    name: 'Caixa',
    icon: DollarSign,
    submenu: [
      { 
        name: 'Caixa Receitas', 
        href: 'caixa/receitas', 
        icon: FileText,
      },
      { 
        name: 'Caixa Despesas', 
        href: '/caixa/movimentacoes', 
        icon: CreditCard,
      },
      { 
        name: 'Receita X Despesa',
        href: '/caixa/relatorios', 
        icon: BarChart,
      },
    ],
  },
  {
    name: 'Cadastro',
    icon: Users,
    submenu: [
      { name: 'Produto', href: '/cadastro/produto', icon: Package },
      { name: 'Cliente', href: '/cadastro/cliente', icon: Users },
      { name: 'Funcionário', href: '/cadastro/funcionario', icon: UserPlus },
    ],
  },
  {
    name: 'Gerenciamento',
    icon: Settings,
    submenu: [
      { name: 'Produto', href: '/gerenciamento/produto', icon: Package },
      { name: 'Cliente', href: '/gerenciamento/cliente', icon: Users },
      { name: 'Funcionário', href: '/gerenciamento/funcionario', icon: UserPlus },
    ],
  },
  {
    name: 'Configuração',
    icon: Settings,
    submenu: [
      { name: 'Perfil', href: '/configuracao/perfil', icon: User },
      { name: 'Aparência', href: '/configuracao/aparencia', icon: Palette },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [openCollapsibles, setOpenCollapsibles] = React.useState<Record<string, boolean>>({})

  const toggleCollapsibles = React.useCallback((name: string) => {
    setOpenCollapsibles((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }, [])

  const renderMenuItem = (item: any, depth = 0) => (
    <SidebarMenuItem key={`${item.name}-${item.href}`}>
      {item.submenu ? (
        <Collapsible
          open={openCollapsibles[item.name]}
          onOpenChange={(open) => setOpenCollapsibles((prev) => ({ ...prev, [item.name]: open }))}>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              onClick={() => toggleCollapsibles(item.name)}
              className={cn(
                "w-full justify-between text-[#FF6600]",
                depth > 0 && "pl-6"
              )}>
              <span className="flex items-center">
                <item.icon className="mr-2 h-4 w-4 text-[#FF6600]" />
                <span className="truncate overflow-ellipsis whitespace-nowrap">{item.name}</span> {/* Modificado aqui */}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-[#1d1f21] transition-transform duration-200",
                  openCollapsibles[item.name] ? "rotate-180" : ""
                )}
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.submenu.map((subItem: any) => renderMenuItem(subItem, depth + 1))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <SidebarMenuSubButton
          asChild
          isActive={pathname === item.href}
        >
          <Link 
            href={item.href}
            className={cn(
              "text-[#444648] hover:bg-[#FF6600]/10",
              depth > 0 && "pl-6"
            )}>
            <item.icon className="mr-2 h-4 w-4 text-[#FF6600]" />
            <span className="truncate overflow-ellipsis whitespace-nowrap">{item.name}</span> {/* Modificado aqui */}
          </Link>
        </SidebarMenuSubButton>
      )}
    </SidebarMenuItem>
  )

  return (
    <Sidebar className="border-r-0 w-64"> {/* A largura foi ajustada para 72 */}
      <SidebarHeader className="p-4 border-b border-[#FF6600]/20 bg-[#F5F5F5]">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 rounded-lg bg-[#FF6600]">
            <AvatarImage src="/logo.png" alt="Adriana Store" />
            <AvatarFallback className="rounded-lg bg-[#FF6600] text-[#F5F5F5]">AS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-[#1d1f21]">Adriana ShowRoom</h2>
            <p className="text-sm text-[#444648]">Vestuário</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2 bg-[#FFFFFF]">
        <h3 className="px-4 py-2 text-xs font-medium text-[#1d1f21]">MENU</h3>
        <SidebarMenu>
          {menuItems.map(renderMenuItem)}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="mt-auto p-4 border-t border-[#FF6600]/20 bg-[#F5F5F5]">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 rounded-lg">
            <AvatarImage src="/avatar.png" alt="Adriana" />
            <AvatarFallback className="rounded-lg bg-[#FF6600] text-[#F5F5F5]">AD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-[#1d1f21]">Adriana</p>
            <p className="text-xs text-[#444648]">adriana@gmail.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}