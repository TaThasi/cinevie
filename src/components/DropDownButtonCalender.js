"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function DropDownButtonCalender() {
  const [date, setDate] = React.useState()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "btn m-1 bg-[#8B5CF6] rounded-full text-white w-[9rem]",
          )}
        > 
        <div className=" flex flex-row justify-between items-center w-full gap-x-8">
            <p>Date</p>   
            <ChevronDown />
        </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 " align="end">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus

        />
      </PopoverContent>
    </Popover>
  )
}
