export enum GraphBackground {
  Dots = 'dots',
  Lines = 'lines',
  Cross = 'cross'
}

export interface GraphSettings {
  ySpacing: number;
  xSpacing: number;
  background: GraphBackground;
}
