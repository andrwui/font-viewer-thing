import { type ReactElement, type ChangeEvent } from 'react'
import { useLocalFontsStore } from '@/stores/LocalFontsStore'
import { getFontFilters } from '@/helpers/FontHelper'
const SearchBar = (): ReactElement => {
  // Declare the store
  const { fonts, setFilteredFonts, setFilterValue } = useLocalFontsStore()

  // Filters the fonts and sets the filter value on the onChange Event of the Bar
  const filterFonts = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilteredFonts(getFontFilters(e, fonts))
    setFilterValue(e.target.value)
  }

  return (
    // Returns a reusable Bar component
    <input
      id="SearchBar"
      type="text"
      onChange={filterFonts}
      name="Search Bar"
      placeholder="Search fonts..."
      className="absolute left-1/2 top-1/2 h-2/3 w-2/5 -translate-x-1/2 -translate-y-1/2 transform rounded-md border-none bg-bar-white text-center  text-sm text-bar-black placeholder-bar-black"
    />
  )
}

export default SearchBar
