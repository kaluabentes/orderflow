import getString from '~/i18n/getString'

function formatMoney(value: number) {
  return `${getString('app.currency')} ${value.toLocaleString(
    getString('app.locale'),
    {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }
  )}`
}

export default formatMoney
