import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { ArrowRight, BarChart3, Calendar, Dumbbell, LineChart, Utensils } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col px-20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Dumbbell className="h-6 w-6" />
            <span>AI Fitness</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Đăng nhập</Button>
            </Link>
            <Link href="/register">
              <Button>Đăng ký</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Tăng cân & tăng cơ một cách khoa học
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Lên kế hoạch tăng cân với lịch tập và chế độ ăn được cá nhân hóa.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="gap-1">
                      Bắt đầu ngay <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      Tìm hiểu thêm
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mr-0 flex items-center justify-center p-4 bg-background rounded-lg shadow-lg border">
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-lg">
                <Dumbbell className="h-10 w-10 mb-2 text-primary" />
                <h3 className="text-lg font-medium">Personalized Workouts</h3>
                <p className="text-sm text-center text-muted-foreground">Tailored to your goals and experience</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-lg">
                <Utensils className="h-10 w-10 mb-2 text-primary" />
                <h3 className="text-lg font-medium">Nutrition Planning</h3>
                <p className="text-sm text-center text-muted-foreground">Calorie and macro tracking</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-lg">
                <LineChart className="h-10 w-10 mb-2 text-primary" />
                <h3 className="text-lg font-medium">Progress Tracking</h3>
                <p className="text-sm text-center text-muted-foreground">Visualize your improvements</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-2 text-primary"
                >
                  <path d="M10 3.2C10 2.1 9 1 7.5 1S5 2.1 5 3.2c0 .7.4 1.2 1 1.6" />
                  <path d="M5 5.8c-1.7.3-3 1.8-3 3.6 0 1.1.5 2.1 1.3 2.8" />
                  <path d="M6.1 12.2c-.7.2-1.1.7-1.1 1.3 0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5 0-.6-.4-1.1-1.1-1.3" />
                  <path d="M14 3.2c0-1.1 1-2.2 2.5-2.2s2.5 1.1 2.5 2.2c0 .7-.4 1.2-1 1.6" />
                  <path d="M19 5.8c1.7.3 3 1.8 3 3.6 0 1.1-.5 2.1-1.3 2.8" />
                  <path d="M17.9 12.2c.7.2 1.1.7 1.1 1.3 0 .8-.7 1.5-1.5 1.5h-3c-.8 0-1.5-.7-1.5-1.5 0-.6.4-1.1 1.1-1.3" />
                  <path d="M12 8a3 3 0 0 0-3 3v1" />
                  <path d="M12 8a3 3 0 0 1 3 3v1" />
                  <path d="M9.7 15h4.6" />
                  <path d="M12 16v5" />
                </svg>
                <h3 className="text-lg font-medium">AI Adaptation</h3>
                <p className="text-sm text-center text-muted-foreground">Plans adjust to your progress</p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tính năng chính</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AI Fitness giúp bạn đạt được mục tiêu tăng cân và tăng cơ với các công cụ theo dõi và lên kế hoạch thông
                  minh.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/20 p-3">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Kế hoạch dinh dưỡng</h3>
                <p className="text-center text-muted-foreground">
                  Lên thực đơn phù hợp với mục tiêu tăng cân, dễ tìm nguyên liệu tại Việt Nam.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/20 p-3">
                  <Dumbbell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Lịch tập luyện</h3>
                <p className="text-center text-muted-foreground">
                  Bài tập được chia theo nhóm cơ, có hướng dẫn chi tiết và theo dõi tiến độ.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/20 p-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Theo dõi tiến độ</h3>
                <p className="text-center text-muted-foreground">
                  Biểu đồ trực quan về cân nặng, calories, protein và sức mạnh theo thời gian.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/20 p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Đồng bộ lịch</h3>
                <p className="text-center text-muted-foreground">
                  Kết nối với Google Calendar hoặc Apple Calendar để nhắc nhở lịch ăn và tập.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/20 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2a8 8 0 0 1 8 8v12l-4-4-4 4-4-4-4 4V10a8 8 0 0 1 8-8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Trợ lý AI</h3>
                <p className="text-center text-muted-foreground">
                  Gợi ý kế hoạch linh hoạt theo lịch trình cá nhân và điều chỉnh khi cần thiết.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/20 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Thông báo nhắc nhở</h3>
                <p className="text-center text-muted-foreground">
                  Nhắc nhở khi đến giờ ăn, tập luyện hoặc khi chưa hoàn thành mục tiêu.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 AI Fitness. Mọi quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Điều khoản
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
