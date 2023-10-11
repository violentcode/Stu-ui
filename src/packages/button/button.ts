export interface IButtonProps {
  type: 'primary' | 'success' | 'warning' | 'danger' | 'default'
  size: 'large' | 'small' | 'mini' | 'normal'
}

export const buttonProps: IButtonProps = {
  type: 'default',
  size: 'normal'
}
