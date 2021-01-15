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
    }
  ]
}

export default mixins
