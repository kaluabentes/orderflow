import React from 'react'
import Badge from '~/components/atoms/Badge'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Paragraph from '~/components/atoms/Paragraph'
import { CommonProps } from '~/styles/utils/CommonProps'
import getString from '~/i18n/getString'

interface OptionHeaderProps extends CommonProps {
  title: string
  subtitle?: string
  limit?: number
  amount?: number
  isDisabled: boolean
  isRequired: boolean
}

function OptionHeader({
  isDisabled,
  isRequired,
  title,
  subtitle,
  limit,
  amount,
  ...props
}: OptionHeaderProps) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems={subtitle ? 'flex-start' : 'center'}
      {...props}
    >
      <Box display="flex">
        <Heading margin={subtitle && '0 0 5px 0'} fontSize="medium">
          {title}
        </Heading>
        {subtitle && (
          <Paragraph variant="muted" weight="400" fontSize="0.75rem">
            {subtitle}
          </Paragraph>
        )}
      </Box>
      <Box display="flex" flexDirection="row">
        {isRequired && (
          <Badge isDisabled={isDisabled}>{getString('required')}</Badge>
        )}
        {limit && (
          <Badge margin="0 0 0 5px" isDisabled={isDisabled}>
            {limit}/{amount}
          </Badge>
        )}
      </Box>
    </Box>
  )
}

export default OptionHeader
