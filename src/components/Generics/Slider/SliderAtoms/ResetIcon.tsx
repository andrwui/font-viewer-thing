import { type ReactElement } from 'react'

interface ResetIconProps {
  onClick: () => void
  className: string
}

// Icon for reseting the initial value of the slider.
const ResetIcon = ({ onClick, className }: ResetIconProps): ReactElement => {
  return (
    <svg
      className={className}
      // onMouseOver={handleMouseOver}
      // onMouseLeave={handleMouseLeave}
      onClick={onClick}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.659624 0.602958C0.451056 0.812824 0.451056 1.15308 0.659624 1.36295L8.64414 9.39716C8.85271 9.60703 9.19087 9.60703 9.39943 9.39716C9.608 9.1873 9.608 8.84704 9.39943 8.63717L1.41492 0.602958C1.20635 0.393092 0.868192 0.393092 0.659624 0.602958Z"
        fill="#989898"
      />
      <path
        d="M9.34033 0.602956C9.13176 0.39309 8.7936 0.39309 8.58504 0.602956L0.600518 8.63717C0.39195 8.84704 0.39195 9.1873 0.600518 9.39716C0.809086 9.60703 1.14724 9.60703 1.35581 9.39716L9.34033 1.36295C9.54889 1.15308 9.54889 0.812822 9.34033 0.602956Z"
        fill="#989898"
      />
    </svg>
  )
}
export default ResetIcon
