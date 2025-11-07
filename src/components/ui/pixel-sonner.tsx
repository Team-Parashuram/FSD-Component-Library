"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const PixelToaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group font-[family-name:var(--font-press-start)]"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:border-4 group-[.toaster]:border-black group-[.toaster]:bg-[#fffacd] dark:group-[.toaster]:bg-[#2a2a2a] group-[.toaster]:text-black dark:group-[.toaster]:text-white group-[.toaster]:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          description: "group-[.toast]:text-[#555] dark:group-[.toast]:text-[#aaa]",
          actionButton:
            "group-[.toast]:bg-[#ff6b6b] group-[.toast]:text-white group-[.toast]:border-2 group-[.toast]:border-black",
          cancelButton:
            "group-[.toast]:bg-[#ffd700] group-[.toast]:text-black group-[.toast]:border-2 group-[.toast]:border-black",
        },
      }}
      style={
        {
          "--normal-bg": "#fffacd",
          "--normal-text": "#000000",
          "--normal-border": "#000000",
          "--border-radius": "0px",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { PixelToaster }
