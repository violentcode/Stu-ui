export interface IPopoverProps {
  trigger: 'click' | 'focus' | 'hover' | 'manual'
  title: string
  placement: 'top' | 'bottom' | 'left' | 'right'
  modelValue?: boolean
}

export interface IPopoverSlots {
  default: any
  reference: any
}

export const popoverProps: IPopoverProps = {
  trigger: 'click',
  title: '',
  placement: 'top'
}
