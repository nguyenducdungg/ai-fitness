"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../../../components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GoalsPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  // Form state
  const [currentWeight, setCurrentWeight] = useState(65.3)
  const [targetWeight, setTargetWeight] = useState(70)
  const [timeframe, setTimeframe] = useState(12) // weeks
  const [workoutsPerWeek, setWorkoutsPerWeek] = useState(5)
  const [caloriesGoal, setCaloriesGoal] = useState(3000)
  const [proteinGoal, setProteinGoal] = useState(150)

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

  const handleSave = () => {
    // In a real app, this would save to a database
    alert("Mục tiêu đã được cập nhật!")
    router.push("/dashboard")
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Mục tiêu của bạn</h2>
        <p className="text-muted-foreground">Thiết lập và điều chỉnh mục tiêu tăng cân và tăng cơ của bạn.</p>
      </div>

      <Tabs defaultValue="weight">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="weight">Cân nặng</TabsTrigger>
          <TabsTrigger value="nutrition">Dinh dưỡng</TabsTrigger>
          <TabsTrigger value="workout">Tập luyện</TabsTrigger>
        </TabsList>

        <TabsContent value="weight" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mục tiêu cân nặng</CardTitle>
              <CardDescription>Thiết lập mục tiêu cân nặng và khung thời gian</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-weight">Cân nặng hiện tại (kg)</Label>
                <Input
                  id="current-weight"
                  type="number"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(Number.parseFloat(e.target.value))}
                  step={0.1}
                  min={40}
                  max={150}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="target-weight">Cân nặng mục tiêu (kg)</Label>
                <Input
                  id="target-weight"
                  type="number"
                  value={targetWeight}
                  onChange={(e) => setTargetWeight(Number.parseFloat(e.target.value))}
                  step={0.1}
                  min={40}
                  max={150}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeframe">Khung thời gian (tuần)</Label>
                <Slider
                  id="timeframe"
                  defaultValue={[timeframe]}
                  max={24}
                  min={4}
                  step={1}
                  onValueChange={(value) => setTimeframe(value[0])}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>4 tuần</span>
                  <span>{timeframe} tuần</span>
                  <span>24 tuần</span>
                </div>
              </div>
              <div className="rounded-lg border p-4 mt-4">
                <h3 className="font-medium mb-2">Phân tích mục tiêu</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    Cần tăng: <span className="font-bold">{(targetWeight - currentWeight).toFixed(1)} kg</span>
                  </p>
                  <p>
                    Thời gian: <span className="font-bold">{timeframe} tuần</span>
                  </p>
                  <p>
                    Tốc độ tăng cân:{" "}
                    <span className="font-bold">{((targetWeight - currentWeight) / timeframe).toFixed(2)} kg/tuần</span>
                  </p>
                  <p>
                    Calories cần thêm mỗi ngày:{" "}
                    <span className="font-bold">
                      {Math.round(((targetWeight - currentWeight) / timeframe) * 7 * 500)} kcal
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => router.push("/dashboard")}>
                Hủy
              </Button>
              <Button onClick={handleSave}>Lưu thay đổi</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mục tiêu dinh dưỡng</CardTitle>
              <CardDescription>Thiết lập mục tiêu calories và protein hàng ngày</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="calories-goal">Mục tiêu calories hàng ngày (kcal)</Label>
                <Input
                  id="calories-goal"
                  type="number"
                  value={caloriesGoal}
                  onChange={(e) => setCaloriesGoal(Number.parseInt(e.target.value))}
                  step={50}
                  min={1500}
                  max={5000}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="protein-goal">Mục tiêu protein hàng ngày (g)</Label>
                <Input
                  id="protein-goal"
                  type="number"
                  value={proteinGoal}
                  onChange={(e) => setProteinGoal(Number.parseInt(e.target.value))}
                  step={5}
                  min={50}
                  max={300}
                />
              </div>
              <div className="rounded-lg border p-4 mt-4">
                <h3 className="font-medium mb-2">Phân tích dinh dưỡng</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    Calories/kg cân nặng:{" "}
                    <span className="font-bold">{Math.round(caloriesGoal / currentWeight)} kcal/kg</span>
                  </p>
                  <p>
                    Protein/kg cân nặng:{" "}
                    <span className="font-bold">{(proteinGoal / currentWeight).toFixed(1)} g/kg</span>
                  </p>
                  <p>
                    Tỷ lệ dinh dưỡng gợi ý: <span className="font-bold">40/30/30</span> (Carbs/Protein/Chất béo)
                  </p>
                  <p>
                    Carbs gợi ý: <span className="font-bold">{Math.round((caloriesGoal * 0.4) / 4)} g</span>
                  </p>
                  <p>
                    Chất béo gợi ý: <span className="font-bold">{Math.round((caloriesGoal * 0.3) / 9)} g</span>
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => router.push("/dashboard")}>
                Hủy
              </Button>
              <Button onClick={handleSave}>Lưu thay đổi</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="workout" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mục tiêu tập luyện</CardTitle>
              <CardDescription>Thiết lập lịch tập và mục tiêu sức mạnh</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="workouts-per-week">Số buổi tập mỗi tuần</Label>
                <Select
                  value={workoutsPerWeek.toString()}
                  onValueChange={(value) => setWorkoutsPerWeek(Number.parseInt(value))}
                >
                  <SelectTrigger id="workouts-per-week">
                    <SelectValue placeholder="Chọn số buổi tập" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 buổi/tuần</SelectItem>
                    <SelectItem value="4">4 buổi/tuần</SelectItem>
                    <SelectItem value="5">5 buổi/tuần</SelectItem>
                    <SelectItem value="6">6 buổi/tuần</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workout-style">Phong cách tập luyện</Label>
                <Select defaultValue="split">
                  <SelectTrigger id="workout-style">
                    <SelectValue placeholder="Chọn phong cách tập" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="split">Chia nhóm cơ (Split)</SelectItem>
                    <SelectItem value="fullbody">Toàn thân (Full Body)</SelectItem>
                    <SelectItem value="ppl">Push/Pull/Legs</SelectItem>
                    <SelectItem value="upper-lower">Upper/Lower</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workout-intensity">Cường độ tập luyện</Label>
                <Select defaultValue="moderate">
                  <SelectTrigger id="workout-intensity">
                    <SelectValue placeholder="Chọn cường độ tập" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Nhẹ</SelectItem>
                    <SelectItem value="moderate">Vừa phải</SelectItem>
                    <SelectItem value="intense">Cao</SelectItem>
                    <SelectItem value="very-intense">Rất cao</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="rounded-lg border p-4 mt-4">
                <h3 className="font-medium mb-2">Phân tích lịch tập</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    Số buổi tập: <span className="font-bold">{workoutsPerWeek} buổi/tuần</span>
                  </p>
                  <p>
                    Thời gian tập gợi ý: <span className="font-bold">45-60 phút/buổi</span>
                  </p>
                  <p>
                    Tổng thời gian: <span className="font-bold">{workoutsPerWeek * 60} phút/tuần</span>
                  </p>
                  <p>
                    Ngày nghỉ: <span className="font-bold">{7 - workoutsPerWeek} ngày/tuần</span>
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => router.push("/dashboard")}>
                Hủy
              </Button>
              <Button onClick={handleSave}>Lưu thay đổi</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
