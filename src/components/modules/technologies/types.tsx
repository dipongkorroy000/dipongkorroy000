export interface TechItem {
  name: string
  icon: string
  color?: string
}

export interface TechStackProps {
  technologies?: TechItem[]
  className?: string
  'data-id'?: string
}

export interface TechStackItemProps {
  item: TechItem
  index: number
  rowIndex: number
}
