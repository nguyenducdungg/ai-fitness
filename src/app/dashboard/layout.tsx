import type React from "react"
import type { Metadata } from "next"
import { DashboardNav } from "../../components/dashboard-nav"

export const metadata: Metadata = {
  title: "Dashboard - AI Fitness",
  description: "Quản lý kế hoạch tăng cân và tăng cơ của bạn",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col px-20">
      <DashboardNav />
      <div className="flex-1 container py-6">{children}</div>
    </div>
  )
}
