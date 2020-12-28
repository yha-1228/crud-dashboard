import { isWidthDown } from '@material-ui/core'

type Props = {
  children?: React.ReactNode
  display?: 'block' | 'inline-block'
  padding?: any
  paddingRight?: any
  paddingLeft?: any
  paddingTop?: any
  paddingBottom?: any
  margin?: any
  marginRight?: any
  marginLeft?: any
  marginTop?: any
  marginBottom?: any
  width?: any
  height?: any
  backgroundColor?: any
}

export function Box({
  children,
  display,
  padding,
  paddingRight,
  paddingLeft,
  paddingTop,
  paddingBottom,
  margin,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
  width,
  height,
  backgroundColor,
}: Props) {
  return (
    <div
      style={{
        display: display,
        padding: padding,
        paddingRight: paddingRight,
        paddingLeft: paddingLeft,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        margin: margin,
        marginRight: marginRight,
        marginLeft: marginLeft,
        marginTop: marginTop,
        marginBottom: marginBottom,
        width: width,
        height: height,
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </div>
  )
}
