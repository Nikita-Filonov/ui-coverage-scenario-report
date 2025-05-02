export enum SelectorType {
  CSS = 'CSS',
  XPath = 'XPATH'
}

export interface SelectorTypeFilters {
  selectorTypes: SelectorType[];
}
