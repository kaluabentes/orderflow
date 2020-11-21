import getString from '~/i18n/getString'

export const navItems = [
  {
    label: getString('app.header.home'),
    path: '/'
  },
  {
    label: getString('app.header.about'),
    path: '/about'
  },
  {
    label: getString('app.header.orders'),
    path: '/orders'
  },
  {
    label: getString('app.header.profile'),
    path: '/profile'
  },
  {
    label: getString('app.header.logout'),
    path: '/logout'
  }
]