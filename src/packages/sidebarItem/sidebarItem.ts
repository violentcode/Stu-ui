export interface ISideBarItemProps {
  title?: string
  to?: string
  disabled?: boolean | string
}

export const sideBarItemProps: ISideBarItemProps = {
  title: '',
  to: '/',
  disabled: false
}
