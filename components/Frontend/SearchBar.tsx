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
        <InputGroupInput placeholder="Search for cars..." />
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
    </InputGroup>
    </div>
      )
}