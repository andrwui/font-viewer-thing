import Text from '@/components/Generics/Text'
import { LuArrowUpRight } from 'react-icons/lu'
import { type ReactElement } from 'react'
import Link from '@g/Link'
const NotSupported = (): ReactElement => {
  // Returns a placeholder element for when no fonts are found and the filter is currently set.
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-3">
      <Text
        style={{
          width: '50%',
        }}
        size={18}
        weight="200"
        align="center"
        balance
      >
        {`Oops... Your browser may not be compatible with the app, or you denied our request
        to access your local fonts :(`}
      </Text>
      <Text size={16} weight="500">
        <Link to="#">
          Learn more
          <LuArrowUpRight size={16} />
        </Link>
      </Text>
    </div>
  )
}

export default NotSupported
