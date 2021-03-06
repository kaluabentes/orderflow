import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Icon from '~/components/atoms/Icon'
import Paragraph from '~/components/atoms/Paragraph'
import getString from '~/i18n/getString'
import theme from '~/styles/theme'
import getTime from '~/utils/getTime'

function TimelineItem({ isActive, status, createdAt }) {
  return (
    <Box margin="0 0 35px 0" flexDirection="row" zIndex="10">
      <Box
        alignItems="center"
        justifyContent="center"
        minHeight="20px"
        height="20px"
        minWidth="20px"
        color="white"
        borderRadius="50%"
        margin="0 10px 0 0"
        background={
          isActive ? theme.colors.primary : theme.colors.radioBackground
        }
      >
        <Icon fontWeight="bold" fontSize="12px" name="check" />
      </Box>
      <Box>
        <Heading
          color={isActive ? theme.colors.text : theme.colors.radioBackground}
          fontSize="1rem"
          margin="0 0 7px 0"
          fontWeight="500"
        >
          {getString(`order.status.${status}`)}
        </Heading>
        {createdAt && (
          <Box
            fontSize="12px"
            flexDirection="row"
            color="rgba(0, 0, 0, 0.2)"
            fontWeight="600"
            alignItems="center"
          >
            <Icon fontSize="18px" name="schedule" margin="0 5px 0 0" />{' '}
            {getTime(createdAt)}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default TimelineItem
