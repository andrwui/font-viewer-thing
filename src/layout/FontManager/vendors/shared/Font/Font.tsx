import { type ReactElement } from 'react'
import { useSizeStore } from 'stores/FontControlsStore'
import { type TFont } from 'types/FontTypes'
import FontDisplay from './FontDisplay/FontDisplay'
import FontName from './FontDisplay/FontName'

interface TFontProps {
  font: TFont
}

const Font = ({ font }: TFontProps): ReactElement => {
  const { size } = useSizeStore()

  // Returns a wrapper for the FontName and FontDisplay elements.

  // Uses the stored size of the fonts to calculate its height, this was done for spacing purposes.
  // As (at my knowledge) Virtuoso cannot measure correctly the height of the elements if they
  // have margins or gaps, the height of the font wrapper is increased in order to make some calculable space between fonts.

  return (
    <div
      className="flex h-max w-full flex-col justify-center gap-2 px-8"
      style={{
        paddingBottom: `${size * 0.5}px`,
      }}
    >
      <FontName font={font} />
      <FontDisplay font={font} />
    </div>
  )
}
export default Font
