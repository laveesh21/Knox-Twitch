import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import streamIcon from '../../../public/streamIcon.svg'

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export const Logo = () => {
  return (
    <div className="flex items-center gap-4 bg-purple-600 rounded-full pr-5">
      <div className="bg-white rounded-full p-3">
        <Image src={streamIcon} alt="KnoxStream"
        />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">KnoxStream</p>
        <p className="text-sm text-mute-foreground">Game On!</p>
      </div>
    </div>
  )
}
