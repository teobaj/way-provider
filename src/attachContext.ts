export const attachWayContext = (component: Element) => {
  let context = window['__wayProvider'].context || {}
  console.log(context)
  Object.entries(context).forEach(([key,value]) => {
    component.setAttribute(key, value as string)
  })
}
