import { Search } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export default function SearchBar() {
  return (
    <div>
        <InputGroup>
        <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
    </InputGroup>
    </div>
      )
}