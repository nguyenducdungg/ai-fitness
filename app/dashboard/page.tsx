"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Calendar, Dumbbell, Plus, Utensils } from "lucide-react"
import Link from "next/link"
import { WeightChart } from "@/components/weight-chart"

export default function Dashboard() {
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

  // Mock data for the dashboard
  const currentWeight = 63
  const targetWeight = 70
  const weightProgress = Math.round((currentWeight / targetWeight) * 100)
  const caloriesGoal = 3000
  const caloriesConsumed = 2450
  const caloriesProgress = Math.round((caloriesConsumed / caloriesGoal) * 100)
  const proteinGoal = 150
  const proteinConsumed = 120
  const proteinProgress = Math.round((proteinConsumed / proteinGoal) * 100)

  const todayMeals = [
    { id: 1, name: "Bữa sáng", time: "07:00", completed: true },
    { id: 2, name: "Bữa trưa", time: "12:00", completed: true },
    { id: 3, name: "Bữa nhẹ", time: "15:00", completed: false },
    { id: 4, name: "Bữa tối", time: "19:00", completed: false },
  ]

  const upcomingWorkouts = [
    { id: 1, name: "Tập ngực & vai", day: "Hôm nay", time: "18:00" },
    { id: 2, name: "Tập chân", day: "Thứ 4", time: "18:00" },
    { id: 3, name: "Tập lưng & tay", day: "Thứ 6", time: "18:00" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Xin chào, {user.name}</h2>
          <p className="text-muted-foreground">Đây là tổng quan về kế hoạch tăng cân và tăng cơ của bạn.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/goals">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Cập nhật mục tiêu
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cân nặng hiện tại</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentWeight} kg</div>
            <p className="text-xs text-muted-foreground">Mục tiêu: {targetWeight} kg</p>
            <Progress value={weightProgress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Còn {targetWeight - currentWeight} kg để đạt mục tiêu</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calories hôm nay</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{caloriesConsumed} kcal</div>
            <p className="text-xs text-muted-foreground">Mục tiêu: {caloriesGoal} kcal</p>
            <Progress value={caloriesProgress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Còn {caloriesGoal - caloriesConsumed} kcal để đạt mục tiêu
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Protein hôm nay</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M4.5 9.5V5.5C4.5 4.4 5.4 3.5 6.5 3.5H17.5C18.6 3.5 19.5 4.4 19.5 5.5V9.5" />
              <path d="M4.5 14.5V18.5C4.5 19.6 5.4 20.5 6.5 20.5H17.5C18.6 20.5 19.5 19.6 19.5 18.5V14.5" />
              <path d="M12 3.5V20.5" />
              <path d="M8.5 7.5V16.5" />
              <path d="M15.5 7.5V16.5" />
              <path d="M4.5 12H19.5" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{proteinConsumed} g</div>
            <p className="text-xs text-muted-foreground">Mục tiêu: {proteinGoal} g</p>
            <Progress value={proteinProgress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Còn {proteinGoal - proteinConsumed} g để đạt mục tiêu</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Tiến độ cân nặng</CardTitle>
            <CardDescription>Theo dõi sự thay đổi cân nặng theo thời gian</CardDescription>
          </CardHeader>
          <CardContent>
            <WeightChart />
          </CardContent>
        </Card>

        <div className="col-span-1 space-y-4">
          <Tabs defaultValue="meals">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="meals">Bữa ăn hôm nay</TabsTrigger>
              <TabsTrigger value="workouts">Lịch tập sắp tới</TabsTrigger>
            </TabsList>
            <TabsContent value="meals" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>Bữa ăn hôm nay</CardTitle>
                    <Link href="/dashboard/meals">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <span className="sr-only sm:not-sr-only sm:inline">Xem tất cả</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {todayMeals.map((meal) => (
                      <div key={meal.id} className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-3">
                          <div className={`h-2 w-2 rounded-full ${meal.completed ? "bg-green-500" : "bg-gray-300"}`} />
                          <div>
                            <p className="text-sm font-medium">{meal.name}</p>
                            <p className="text-xs text-muted-foreground">{meal.time}</p>
                          </div>
                        </div>
                        <Button variant={meal.completed ? "outline" : "default"} size="sm" className="h-8">
                          {meal.completed ? "Đã hoàn thành" : "Đánh dấu"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="workouts" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>Lịch tập sắp tới</CardTitle>
                    <Link href="/dashboard/workouts">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <span className="sr-only sm:not-sr-only sm:inline">Xem tất cả</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {upcomingWorkouts.map((workout) => (
                      <div key={workout.id} className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-3">
                          <Dumbbell className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">{workout.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {workout.day} - {workout.time}
                            </p>
                          </div>
                        </div>
                        <Link href={`/dashboard/workouts`}>
                          <Button variant="outline" size="sm" className="h-8">
                            Chi tiết
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Lịch</CardTitle>
                <Link href="/dashboard/calendar">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <span className="sr-only sm:not-sr-only sm:inline">Xem tất cả</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <Calendar className="h-8 w-8 text-primary" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Kết nối lịch của bạn</p>
                  <p className="text-xs text-muted-foreground">Đồng bộ hóa với Google Calendar hoặc Apple Calendar</p>
                </div>
                <Button className="ml-auto" size="sm">
                  Kết nối
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
