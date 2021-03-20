import React from 'react'
import Actionable from '~/components/atoms/Actionable'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Icon from '~/components/atoms/Icon'
import Paragraph from '~/components/atoms/Paragraph'
import theme from '~/styles/theme'
import List from '../List'

interface AddressCardProps {
  title: string
  subtitle: string
  icon: string
  onClick: () => void
}

function AddressCard({ title, subtitle, icon, onClick }: AddressCardProps) {
  return (
    <Actionable width="100%" onClick={onClick} padding="12px 0">
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          padding="0 8px 0 0"
        >
          <Icon color={theme.colors.textMuted} fontSize="32px" name={icon} />
        </Box>
        <Box display="flex" flex="1" alignItems="flex-start">
          <Heading textAlign="left" fontSize="16px" fontWeight="500" as="h3">
            {title}
          </Heading>
          <Paragraph textAlign="left" fontSize="0.875rem" variant="muted">
            {subtitle}
          </Paragraph>
        </Box>
      </Box>
    </Actionable>
  )
}

export default AddressCard
