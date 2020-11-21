import getString from '~/i18n/getString'

function getRequiredError(field) {
  return getString('validation.required', {
    field: getString(field).toLowerCase()
  })
}

export default getRequiredError
