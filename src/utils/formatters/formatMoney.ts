import getString from '~/i18n/getString'

function formatMoney(value: number) {
  return `${getString('app.currency')} ${value.toLocaleString('', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  })}`
}

export default formatMoney
