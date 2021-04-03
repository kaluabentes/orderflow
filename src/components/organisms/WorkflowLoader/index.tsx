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
          padding="20px 20px 10px 20px"
          borderBottom="1px solid rgba(0, 0, 0, 0.07)"
          margin="0 0 10px 0"
          borderRadius="4px"
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
