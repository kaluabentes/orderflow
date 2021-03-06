function mixins(props) {
  return [
    {
      name: 'border-left',
      value: props['borderLeft']
    },
    {
      name: 'border',
      value: props['border']
    },
    {
      name: 'margin',
      value: props['margin']
    },
    {
      name: 'padding',
      value: props['padding']
    },
    {
      name: 'text-align',
      value: props['align']
    },
    {
      name: 'text-align',
      value: props['textAlign']
    },
    {
      name: 'color',
      value: props['color']
    },
    {
      name: 'font-size',
      value: props['fontSize']
    },
    {
      name: 'font-weight',
      value: props['fontWeight']
    },
    {
      name: 'flex',
      value: props['flex']
    },
    {
      name: 'align-items',
      value: props['alignItems']
    },
    {
      name: 'justify-content',
      value: props['justifyContent']
    },
    ,
    {
      name: 'flex-direction',
      value: props['flexDirection']
    },
    {
      name: 'position',
      value: props['position']
    },
    {
      name: 'top',
      value: props['top']
    },
    {
      name: 'right',
      value: props['right']
    },
    {
      name: 'bottom',
      value: props['bottom']
    },
    {
      name: 'left',
      value: props['left']
    },
    {
      name: 'width',
      value: props['width']
    },
    {
      name: 'height',
      value: props['height']
    },
    {
      name: 'background',
      value: props['background']
    },
    {
      name: 'z-index',
      value: props['zIndex']
    },
    {
      name: 'text-transform',
      value: props['textTransform']
    },
    {
      name: 'max-width',
      value: props['maxWidth']
    },
    {
      name: 'min-width',
      value: props['minWidth']
    },
    {
      name: 'min-height',
      value: props['minHeight']
    },
    {
      name: 'max-height',
      value: props['maxHeight']
    },
    {
      name: 'overflow',
      value: props['overflow']
    },
    {
      name: 'display',
      value: props['display']
    },
    {
      name: 'grid-template-columns',
      value: props['gridTemplateColumns']
    },
    {
      name: 'grid-gap',
      value: props['gridGap']
    },
    {
      name: 'border-radius',
      value: props['borderRadius']
    }
  ]
}

export default mixins
