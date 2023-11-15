export interface ITodoListProps {
    size: string | number
    activeColor: string
    inactiveColor: string
  }
  
  export const todoListProps: ITodoListProps = {
    size: '26px',
    activeColor: '#1989fa',
    inactiveColor: 'rgba(120, 120, 128, 0.16)'
  }