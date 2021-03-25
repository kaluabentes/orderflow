import React from 'react'
import Box from '~/components/atoms/Box'
import {
  LoaderDescription,
  LoaderTitle
} from '~/components/molecules/ProductCard/styles'
import range from '~/utils/range'

function WorkflowLoader() {
  return (
    <>
      {range(8).map(n => (
        <Box
          background="white"
          padding="20px"
          borderBottom="1px solid rgba(0, 0, 0, 0.07)"
        >
          <LoaderDescription />
          <LoaderTitle />
          <LoaderTitle />
        </Box>
      ))}
    </>
  )
}

export default WorkflowLoader
