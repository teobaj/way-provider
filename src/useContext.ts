export const useWayContext = (part?: string) => {
  let context = window['__wayProvider']?.context || {}
  if(part) return context[part]
  return context;
}
