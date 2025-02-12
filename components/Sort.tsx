"use client"
import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { sortTypes } from "@/constants";
import { SelectGroup } from "@radix-ui/react-select";

const Sort = () => {
  const path = usePathname();
  const router = useRouter();

  const handleSort = (value : string) => {
    router.push(`${path}?sort=${value}`)
  }



  return (
    <Select onValueChange={handleSort} defaultValue={sortTypes[0].value}>
    <SelectTrigger className="sort-select">
      <SelectValue  placeholder={sortTypes[0].value} />
    </SelectTrigger>
    <SelectContent className="sort-select-content">
      <SelectGroup>
       {sortTypes.map((sort) => (

<SelectItem value="pineapple" key={sort.label} className="shad-select-item" value={sort.value}>{sort.label}</SelectItem>


))}
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

export default Sort
