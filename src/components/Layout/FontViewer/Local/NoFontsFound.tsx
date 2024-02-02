import Text from '@/components/Generics/Text'
import { type ReactElement } from 'react'

const NoFontsFound = (): ReactElement => {
  // Returns a placeholder element for when no fonts are found and the filter is currently set.
  return (
    <div className="grid h-[calc(100vh-80px)] place-items-center text-txt-sec">
      <Text size={18} weight="200" disabled>
        No fonts were found.
      </Text>
    </div>
  )
}

export default NoFontsFound
