"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../../../components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"
import { WeightChart } from "../../../components/weight-chart"
import { CaloriesChart } from "../../../components/calories-chart"
import { ProteinChart } from "../../../components/protein-chart"
import { StrengthChart } from "../../../components/strength-chart"

export default function ProgressPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (!mounted || isLoading || !user) {
    return (
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Theo dõi tiến độ</h2>
          <p className="text-muted-foreground">Theo dõi sự tiến bộ của bạn theo thời gian.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Cập nhật cân nặng
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tổng quan tiến độ</CardTitle>
          <CardDescription>Từ 01/05/2025 đến 11/05/2025</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">Cân nặng hiện tại</div>
              <div className="text-2xl font-bold">65.3 kg</div>
              <div className="text-xs text-green-500">+2.3 kg từ ban đầu</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">Calories trung bình/ngày</div>
              <div className="text-2xl font-bold">2,950 kcal</div>
              <div className="text-xs text-green-500">+350 kcal từ ban đầu</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">Protein trung bình/ngày</div>
              <div className="text-2xl font-bold">145g</div>
              <div className="text-xs text-green-500">+35g từ ban đầu</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">Tăng sức mạnh</div>
              <div className="text-2xl font-bold">+15%</div>
              <div className="text-xs text-green-500">Bench Press: 60kg → 70kg</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="weight">
        <TabsList className="w-full grid grid-cols-4">
          <TabsTrigger value="weight">Cân nặng</TabsTrigger>
          <TabsTrigger value="calories">Calories</TabsTrigger>
          <TabsTrigger value="protein">Protein</TabsTrigger>
          <TabsTrigger value="strength">Sức mạnh</TabsTrigger>
        </TabsList>
        <TabsContent value="weight" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biểu đồ cân nặng</CardTitle>
              <CardDescription>Theo dõi sự thay đổi cân nặng theo thời gian</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <WeightChart />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lịch sử cân nặng</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">Ngày</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Cân nặng</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Thay đổi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-sm">12/06/2025</td>
                      <td className="px-4 py-3 text-sm">66.1 kg</td>
                      <td className="px-4 py-3 text-sm text-green-500">+0.4 kg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">05/06/2025</td>
                      <td className="px-4 py-3 text-sm">65.7 kg</td>
                      <td className="px-4 py-3 text-sm text-green-500">+0.4 kg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">29/05/2025</td>
                      <td className="px-4 py-3 text-sm">65.3 kg</td>
                      <td className="px-4 py-3 text-sm text-green-500">+0.5 kg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">22/05/2025</td>
                      <td className="px-4 py-3 text-sm">64.8 kg</td>
                      <td className="px-4 py-3 text-sm text-green-500">+0.6 kg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">15/05/2025</td>
                      <td className="px-4 py-3 text-sm">64.2 kg</td>
                      <td className="px-4 py-3 text-sm text-green-500">+0.7 kg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">08/05/2025</td>
                      <td className="px-4 py-3 text-sm">63.5 kg</td>
                      <td className="px-4 py-3 text-sm text-green-500">+0.5 kg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">01/05/2025</td>
                      <td className="px-4 py-3 text-sm">63.0 kg</td>
                      <td className="px-4 py-3 text-sm">Bắt đầu</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biểu đồ calories</CardTitle>
              <CardDescription>Theo dõi lượng calories tiêu thụ theo thời gian</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <CaloriesChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="protein" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biểu đồ protein</CardTitle>
              <CardDescription>Theo dõi lượng protein tiêu thụ theo thời gian</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ProteinChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="strength" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biểu đồ sức mạnh</CardTitle>
              <CardDescription>Theo dõi sự tiến bộ về sức mạnh theo thời gian</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <StrengthChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Gợi ý từ AI</CardTitle>
          <CardDescription>Dựa trên tiến độ của bạn, đây là một số gợi ý để cải thiện kết quả</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Tăng cường protein</h3>
            <p className="text-sm text-muted-foreground">
              Bạn đang tiêu thụ trung bình 145g protein mỗi ngày, nhưng với mục tiêu tăng cơ, bạn nên tăng lên 160-170g
              mỗi ngày (khoảng 2.5g/kg cân nặng).
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Tăng tốc độ tăng cân</h3>
            <p className="text-sm text-muted-foreground">
              Để đạt mục tiêu 70kg trong 3 tháng, bạn cần tăng khoảng 0.6kg mỗi tuần. Hiện tại bạn đang tăng khoảng
              0.5kg/tuần. Hãy tăng thêm 200-300 calories mỗi ngày.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Cải thiện sức mạnh</h3>
            <p className="text-sm text-muted-foreground">
              Sức mạnh của bạn đang tăng đều đặn. Hãy tiếp tục áp dụng nguyên tắc progressive overload và đảm bảo nghỉ
              ngơi đầy đủ giữa các buổi tập.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
