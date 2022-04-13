export const useWayContext = (component: Element) => {
  let context = window['__wayProvider'].context || {}
  console.log(context)
  Object.entries(context).forEach(([key,value]) => {
    console.log('===', component, key, value)

    component.setAttribute(key, value as any)
  })
}

