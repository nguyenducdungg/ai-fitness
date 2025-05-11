"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../../../components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell, Plus } from "lucide-react"

// Mock data for workouts
const weeklyWorkouts = {
  monday: [
    {
      id: 1,
      name: "Tập ngực & vai",
      time: "18:00",
      duration: "60 phút",
      exercises: [
        { name: "Bench Press", sets: 4, reps: "8-10", weight: "60kg" },
        { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", weight: "22kg" },
        { name: "Cable Flyes", sets: 3, reps: "12-15", weight: "15kg" },
        { name: "Shoulder Press", sets: 4, reps: "8-10", weight: "40kg" },
        { name: "Lateral Raises", sets: 3, reps: "12-15", weight: "10kg" },
      ],
    },
  ],
  tuesday: [
    {
      id: 2,
      name: "Cardio nhẹ",
      time: "18:00",
      duration: "30 phút",
      exercises: [
        { name: "Chạy bộ", sets: 1, reps: "20 phút", weight: "N/A" },
        { name: "Plank", sets: 3, reps: "60 giây", weight: "N/A" },
        { name: "Jumping Jacks", sets: 3, reps: "30 giây", weight: "N/A" },
      ],
    },
  ],
  wednesday: [
    {
      id: 3,
      name: "Tập chân",
      time: "18:00",
      duration: "60 phút",
      exercises: [
        { name: "Squat", sets: 4, reps: "8-10", weight: "80kg" },
        { name: "Leg Press", sets: 3, reps: "10-12", weight: "120kg" },
        { name: "Leg Extension", sets: 3, reps: "12-15", weight: "50kg" },
        { name: "Leg Curl", sets: 3, reps: "12-15", weight: "40kg" },
        { name: "Calf Raises", sets: 4, reps: "15-20", weight: "60kg" },
      ],
    },
  ],
  thursday: [
    {
      id: 4,
      name: "Nghỉ ngơi",
      time: "N/A",
      duration: "N/A",
      exercises: [],
    },
  ],
  friday: [
    {
      id: 5,
      name: "Tập lưng & tay",
      time: "18:00",
      duration: "60 phút",
      exercises: [
        { name: "Pull-ups", sets: 4, reps: "8-10", weight: "Cân nặng" },
        { name: "Barbell Row", sets: 3, reps: "10-12", weight: "60kg" },
        { name: "Lat Pulldown", sets: 3, reps: "12-15", weight: "55kg" },
        { name: "Bicep Curls", sets: 3, reps: "10-12", weight: "15kg" },
        { name: "Tricep Pushdown", sets: 3, reps: "12-15", weight: "25kg" },
      ],
    },
  ],
  saturday: [
    {
      id: 6,
      name: "Tập toàn thân",
      time: "10:00",
      duration: "75 phút",
      exercises: [
        { name: "Deadlift", sets: 4, reps: "6-8", weight: "100kg" },
        { name: "Push-ups", sets: 3, reps: "15-20", weight: "Cân nặng" },
        { name: "Dips", sets: 3, reps: "10-12", weight: "Cân nặng" },
        { name: "Chin-ups", sets: 3, reps: "8-10", weight: "Cân nặng" },
        { name: "Lunges", sets: 3, reps: "12 mỗi chân", weight: "20kg" },
      ],
    },
  ],
  sunday: [
    {
      id: 7,
      name: "Nghỉ ngơi",
      time: "N/A",
      duration: "N/A",
      exercises: [],
    },
  ],
}

export default function WorkoutsPage() {
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
          <h2 className="text-3xl font-bold tracking-tight">Lịch tập luyện</h2>
          <p className="text-muted-foreground">Quản lý các bài tập để đạt mục tiêu tăng cơ.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Thêm bài tập
          </Button>
          <Button variant="outline">Tạo lịch tập mới</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tổng quan lịch tập</CardTitle>
          <CardDescription>5 buổi tập/tuần, tập trung vào các nhóm cơ chính</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">Tổng thời gian tập/tuần</div>
              <div className="text-2xl font-bold">285 phút</div>
              <div className="text-xs text-muted-foreground">Trung bình 57 phút/buổi</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">Tổng số bài tập</div>
              <div className="text-2xl font-bold">23 bài tập</div>
              <div className="text-xs text-muted-foreground">Tập trung vào các nhóm cơ chính</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">Ngày nghỉ</div>
              <div className="text-2xl font-bold">2 ngày/tuần</div>
              <div className="text-xs text-muted-foreground">Thứ 5 và Chủ nhật</div>
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
            {weeklyWorkouts[day.value as keyof typeof weeklyWorkouts].map((workout) => (
              <Card key={workout.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Dumbbell className="h-4 w-4 text-primary" />
                      <CardTitle className="text-lg">{workout.name}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      {workout.time !== "N/A" && (
                        <div className="text-sm text-muted-foreground">
                          {workout.time} • {workout.duration}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {workout.exercises.length > 0 ? (
                    <div className="space-y-4">
                      <div className="rounded-md border">
                        <table className="min-w-full divide-y divide-border">
                          <thead>
                            <tr className="divide-x divide-border">
                              <th className="px-4 py-3 text-left text-sm font-medium">Bài tập</th>
                              <th className="px-4 py-3 text-center text-sm font-medium">Sets</th>
                              <th className="px-4 py-3 text-center text-sm font-medium">Reps</th>
                              <th className="px-4 py-3 text-center text-sm font-medium">Tạ</th>
                              <th className="px-4 py-3 text-center text-sm font-medium">Hoàn thành</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {workout.exercises.map((exercise, index) => (
                              <tr key={index} className="divide-x divide-border">
                                <td className="px-4 py-3 text-sm">{exercise.name}</td>
                                <td className="px-4 py-3 text-center text-sm">{exercise.sets}</td>
                                <td className="px-4 py-3 text-center text-sm">{exercise.reps}</td>
                                <td className="px-4 py-3 text-center text-sm">{exercise.weight}</td>
                                <td className="px-4 py-3 text-center">
                                  <Button variant="outline" size="sm">
                                    Đánh dấu
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline">Chỉnh sửa</Button>
                        <Button>Hoàn thành tất cả</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                      <Dumbbell className="h-10 w-10 text-muted-foreground mb-2" />
                      <h3 className="text-lg font-medium">Ngày nghỉ</h3>
                      <p className="text-sm text-muted-foreground mt-1">Hãy để cơ thể nghỉ ngơi và phục hồi.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Gợi ý từ AI</CardTitle>
          <CardDescription>
            Dựa trên mục tiêu tăng cân và tăng cơ của bạn, đây là một số gợi ý để cải thiện lịch tập
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Tăng cường tập chân</h3>
            <p className="text-sm text-muted-foreground">
              Tập chân kích thích sản xuất testosterone tự nhiên, giúp tăng cơ toàn thân. Hãy thêm bài tập Lunges và
              Romanian Deadlift vào ngày tập chân.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Tăng cường tập compound</h3>
            <p className="text-sm text-muted-foreground">
              Các bài tập compound như Squat, Deadlift, Bench Press giúp tăng cơ hiệu quả. Hãy ưu tiên các bài tập này ở
              đầu buổi tập khi bạn còn nhiều năng lượng.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Tăng dần tạ mỗi tuần</h3>
            <p className="text-sm text-muted-foreground">
              Để cơ bắp phát triển, hãy áp dụng nguyên tắc progressive overload. Tăng tạ 2.5-5% mỗi tuần hoặc tăng số
              lần lặp lại để thách thức cơ bắp.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
