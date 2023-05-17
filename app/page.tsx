import Image from "next/image"
import Animation from "./element/Animation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Animation />
    </main>
  )
}
