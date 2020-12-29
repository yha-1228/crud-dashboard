type Props = {
  children?: React.ReactNode
  display?: 'block' | 'inline-block' | 'flex'
  textAlign?: 'left' | 'center' | 'right'
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
  position?: any
}

export function Box({
  children,
  display,
  textAlign,
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
  position,
}: Props) {
  return (
    <div
      style={{
        display: display,
        textAlign: textAlign,
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
        position: position,
      }}
    >
      {children}
    </div>
  )
}
