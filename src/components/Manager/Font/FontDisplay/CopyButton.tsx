import { type ReactElement } from 'react'
import type { Font } from '@/types/FontTypes'

interface CopyIconProps {
  family: Font
  size: number
}

export const CopyButton = ({ family, size }: CopyIconProps): ReactElement => {
  // Returns a simple p with an onClick event that retrieves the name of
  // the font clicked and save it in the user's clipboard.
  return (
    <p
      onClick={async () => await navigator.clipboard.writeText(family.name)}
      className="CopyButton"
      style={{
        fontSize: `${size * 0.7}px`,
      }}
    >
      {'<Copy>'}
    </p>
  )
}
