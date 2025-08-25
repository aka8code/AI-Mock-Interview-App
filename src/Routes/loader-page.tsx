import { cn } from "@/lib/utils"
import { Loader } from "lucide-react"

export const LoaderPage = ({ className }: {className?: string}) => {
  return (
    //cn is a classnames function to merge class names conditionally
    <div 
        className= {cn(
            "w-screen h-screen flex justify-center items-center overflow-hidden relative bg-red-500 z-50",
             className
        )}
    >
        <Loader className="animate-spin w-6 h-6 min-w-6 min-h-6" />
    </div>
  )
}
