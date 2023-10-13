export interface IRowProps {
    tag?: string
    wrap?: boolean
    gutter?: number | string
    justify?: string
}



export const rowProps: IRowProps = {
    tag: 'div',
    wrap: true,
    justify: 'start'
}
