"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { useAuth } from "./auth-provider"
import { BarChart3, Calendar, Dumbbell, Home, LogOut, Menu, Settings, Utensils, User } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const routes = [
  {
    href: "/dashboard",
    label: "Tổng quan",
    icon: <Home className="h-5 w-5" />,
  },
  {
    href: "/dashboard/meals",
    label: "Kế hoạch dinh dưỡng",
    icon: <Utensils className="h-5 w-5" />,
  },
  {
    href: "/dashboard/workouts",
    label: "Lịch tập luyện",
    icon: <Dumbbell className="h-5 w-5" />,
  },
  {
    href: "/dashboard/progress",
    label: "Theo dõi tiến độ",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    href: "/dashboard/calendar",
    label: "Lịch",
    icon: <Calendar className="h-5 w-5" />,
  },
]

export function DashboardNav() {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex items-center gap-2 font-bold text-xl mb-6">
                <Dumbbell className="h-6 w-6" />
                <span>AI Fitness</span>
              </div>
              <nav className="flex flex-col gap-2">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                      pathname === route.href ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                  >
                    {route.icon}
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
            <Dumbbell className="h-6 w-6" />
            <span>AI Fitness</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-2 font-bold text-xl">
          <Link href="/dashboard">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6" />
              <span>AI Fitness</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`flex items-center gap-2 text-sm font-medium ${
                pathname === route.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {route.icon}
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Hồ sơ</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings" className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Cài đặt</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Đăng xuất</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  )
}
