import { css } from 'styled-components'

function createMultiple(properties) {
  let styleString = css``

  properties.forEach(prop => {
    styleString = css`
      ${styleString}
      ${prop.name}: ${prop.value};
    `
  })

  return styleString
}

export default createMultiple
