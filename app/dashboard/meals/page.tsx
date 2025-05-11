"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Utensils } from "lucide-react"

// Mock data for meals
const weeklyMeals = {
  monday: [
    { id: 1, name: "Bữa sáng", time: "07:00", foods: ["Bánh mì trứng", "Sữa", "Chuối"], calories: 650, protein: 25 },
    { id: 2, name: "Bữa trưa", time: "12:00", foods: ["Cơm gà", "Rau luộc", "Canh"], calories: 750, protein: 35 },
    { id: 3, name: "Bữa nhẹ", time: "15:00", foods: ["Sữa chua", "Granola", "Táo"], calories: 350, protein: 15 },
    { id: 4, name: "Bữa tối", time: "19:00", foods: ["Cơm", "Thịt bò xào", "Rau xào"], calories: 700, protein: 30 },
  ],
  tuesday: [
    { id: 1, name: "Bữa sáng", time: "07:00", foods: ["Phở gà", "Cam"], calories: 600, protein: 25 },
    { id: 2, name: "Bữa trưa", time: "12:00", foods: ["Cơm", "Cá kho", "Rau muống xào"], calories: 700, protein: 35 },
    { id: 3, name: "Bữa nhẹ", time: "15:00", foods: ["Sinh tố", "Hạt điều"], calories: 400, protein: 10 },
    { id: 4, name: "Bữa tối", time: "19:00", foods: ["Bún thịt nướng", "Rau sống"], calories: 650, protein: 30 },
  ],
  wednesday: [
    { id: 1, name: "Bữa sáng", time: "07:00", foods: ["Bánh mì thịt", "Sữa đậu nành"], calories: 550, protein: 20 },
    {
      id: 2,
      name: "Bữa trưa",
      time: "12:00",
      foods: ["Cơm", "Thịt kho trứng", "Canh chua"],
      calories: 800,
      protein: 40,
    },
    { id: 3, name: "Bữa nhẹ", time: "15:00", foods: ["Sữa", "Bánh quy yến mạch"], calories: 300, protein: 15 },
    { id: 4, name: "Bữa tối", time: "19:00", foods: ["Mì xào hải sản", "Rau"], calories: 700, protein: 35 },
  ],
  thursday: [
    { id: 1, name: "Bữa sáng", time: "07:00", foods: ["Xôi thịt", "Sữa"], calories: 650, protein: 25 },
    { id: 2, name: "Bữa trưa", time: "12:00", foods: ["Cơm", "Sườn xào chua ngọt", "Rau"], calories: 750, protein: 30 },
    { id: 3, name: "Bữa nhẹ", time: "15:00", foods: ["Sữa chua", "Hạt hỗn hợp"], calories: 350, protein: 15 },
    { id: 4, name: "Bữa tối", time: "19:00", foods: ["Cơm", "Thịt gà", "Rau xào"], calories: 700, protein: 35 },
  ],
  friday: [
    { id: 1, name: "Bữa sáng", time: "07:00", foods: ["Bánh cuốn", "Nước cam"], calories: 500, protein: 20 },
    { id: 2, name: "Bữa trưa", time: "12:00", foods: ["Cơm", "Thịt bò xào", "Canh"], calories: 750, protein: 40 },
    { id: 3, name: "Bữa nhẹ", time: "15:00", foods: ["Chuối", "Sữa", "Hạt óc chó"], calories: 400, protein: 15 },
    { id: 4, name: "Bữa tối", time: "19:00", foods: ["Bún chả", "Rau sống"], calories: 650, protein: 30 },
  ],
  saturday: [
    { id: 1, name: "Bữa sáng", time: "07:00", foods: ["Bánh mì trứng", "Sữa"], calories: 600, protein: 25 },
    { id: 2, name: "Bữa trưa", time: "12:00", foods: ["Cơm", "Thịt kho", "Rau muống"], calories: 750, protein: 35 },
    { id: 3, name: "Bữa nhẹ", time: "15:00", foods: ["Sinh tố protein", "Chuối"], calories: 450, protein: 25 },
    { id: 4, name: "Bữa tối", time: "19:00", foods: ["Lẩu", "Rau", "Thịt"], calories: 800, protein: 40 },
  ],
  sunday: [
    { id: 1, name: "Bữa sáng", time: "07:00", foods: ["Phở bò", "Cam"], calories: 650, protein: 30 },
    { id: 2, name: "Bữa trưa", time: "12:00", foods: ["Cơm", "Gà rán", "Salad"], calories: 800, protein: 40 },
    { id: 3, name: "Bữa nhẹ", time: "15:00", foods: ["Sữa chua", "Granola"], calories: 350, protein: 15 },
    { id: 4, name: "Bữa tối", time: "19:00", foods: ["Bún bò Huế"], calories: 700, protein: 35 },
  ],
}

export default function MealsPage() {
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

  const days = [
    { value: "monday", label: "Thứ 2" },
    { value: "tuesday", label: "Thứ 3" },
    { value: "wednesday", label: "Thứ 4" },
    { value: "thursday", label: "Thứ 5" },
    { value: "friday", label: "Thứ 6" },
    { value: "saturday", label: "Thứ 7" },
    { value: "sunday", label: "Chủ nhật" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Kế hoạch dinh dưỡng</h2>
          <p className="text-muted-foreground">Quản lý các bữa ăn hàng ngày để đạt mục tiêu tăng cân.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Thêm bữa ăn
          </Button>
          <Button variant="outline">Tạo kế hoạch mới</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tổng quan dinh dưỡng</CardTitle>
          <CardDescription>Mục tiêu hàng ngày: 3000 calories, 150g protein</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">Calories trung bình/ngày</div>
              <div className="text-2xl font-bold">2,950 kcal</div>
              <div className="text-xs text-muted-foreground">98% mục tiêu</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">Protein trung bình/ngày</div>
              <div className="text-2xl font-bold">145g</div>
              <div className="text-xs text-muted-foreground">97% mục tiêu</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">Tỷ lệ dinh dưỡng</div>
              <div className="text-2xl font-bold">40/30/30</div>
              <div className="text-xs text-muted-foreground">Carbs/Protein/Chất béo</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="monday">
        <TabsList className="w-full flex overflow-x-auto">
          {days.map((day) => (
            <TabsTrigger key={day.value} value={day.value} className="flex-1">
              {day.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {days.map((day) => (
          <TabsContent key={day.value} value={day.value} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {weeklyMeals[day.value as keyof typeof weeklyMeals].map((meal) => (
                <Card key={meal.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Utensils className="h-4 w-4 text-primary" />
                        <CardTitle className="text-lg">{meal.name}</CardTitle>
                      </div>
                      <div className="text-sm text-muted-foreground">{meal.time}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm">{meal.foods.join(", ")}</div>
                      <div className="flex justify-between text-sm">
                        <div>
                          <span className="font-medium">{meal.calories}</span> kcal
                        </div>
                        <div>
                          <span className="font-medium">{meal.protein}g</span> protein
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <Button variant="outline" size="sm">
                          Chỉnh sửa
                        </Button>
                        <Button size="sm">Đánh dấu hoàn thành</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Gợi ý từ AI</CardTitle>
          <CardDescription>
            Dựa trên mục tiêu tăng cân của bạn, đây là một số gợi ý để cải thiện kế hoạch dinh dưỡng
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Tăng lượng calories vào bữa sáng</h3>
            <p className="text-sm text-muted-foreground">
              Thêm 1 ly sinh tố protein (khoảng 300 calories) vào bữa sáng để tăng tổng lượng calories và protein.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Thêm bữa ăn nhẹ trước khi ngủ</h3>
            <p className="text-sm text-muted-foreground">
              Một ly sữa (250ml) và 30g hạt hỗn hợp trước khi ngủ sẽ cung cấp thêm khoảng 350 calories và 15g protein.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Tăng khẩu phần các bữa chính</h3>
            <p className="text-sm text-muted-foreground">
              Tăng 20% lượng cơm và thịt trong các bữa chính để đạt được mục tiêu 3000 calories mỗi ngày.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
