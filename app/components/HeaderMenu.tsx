"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function HeaderMenu() {
  const [selectedItem, setSelectedItem] = React.useState("arabica")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="ml-3 my-2 md:ml-0 md:my-0 flex justify-start items-center">
        <Button className="hover:bg-transparent hover:text-brand-800 shadow-none focus:ring-0 focus:ring-gray-50 focus-visible:ring-0 focus-visible:outline-none w-full p-0 h-auto text-xs" variant="ghost">
          Menu
          <ChevronDown className="ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Our Products of Coffee</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedItem === "arabica"}
          onCheckedChange={() => setSelectedItem("arabica")}
        >
          Arabica
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedItem === "black"}
          onCheckedChange={() => setSelectedItem("black")}
        >
          Black Coffee
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedItem === "blends"}
          onCheckedChange={() => setSelectedItem("blends")}
        >
          Blends
        </DropdownMenuCheckboxItem>
        <DropdownMenuLabel>The best coffee accessories</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={selectedItem === "grinder"}
          onCheckedChange={() => setSelectedItem("grinder")}
        >
          Electronic coffee grinder
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedItem === "server"}
          onCheckedChange={() => setSelectedItem("server")}
        >
          Coffee server
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedItem === "moka_pot"}
          onCheckedChange={() => setSelectedItem("moka_pot")}
        >
          Moka Pot Cup
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedItem === "spoon"}
          onCheckedChange={() => setSelectedItem("spoon")}
        >
          Digital spoon
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
