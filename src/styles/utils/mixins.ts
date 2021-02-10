function mixins(props) {
  return [
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
    }
  ]
}

export default mixins
