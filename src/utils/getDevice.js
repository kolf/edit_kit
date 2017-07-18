export default function getDevice () {
  const dimensionMap = {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1600px'
  }

  let device = ''
  
  Object.keys(dimensionMap).forEach(key => {
    if (window.matchMedia('(min-width: ' + dimensionMap[key] + ')').matches) {
      device = key
    }
  })
  return device
}
