import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: number
  showText?: boolean
}

export function Logo({ size = 40, showText = true }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative">
        <Image src="/logo.png" alt="Learn Easy Logo" width={size * 2.5} height={size} priority />
      </div>
      {showText && <span className="font-bold text-xl text-primary">Learn Easy</span>}
    </Link>
  )
}
