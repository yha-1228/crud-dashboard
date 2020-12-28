type Props = {
  children?: React.ReactNode
  display?: 'block' | 'inline-block' | 'flex'
  alignItems?: any
  justifyContent?: any
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
  alignItems,
  justifyContent,
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
        alignItems: alignItems,
        justifyContent: justifyContent,
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
