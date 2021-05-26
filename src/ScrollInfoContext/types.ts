export interface IScrollInfoContext {
  x: number,
  y: number,
  xDifference: number,
  yDifference: number,
  xDirection: 'left' | 'right',
  yDirection: 'up' | 'down',
  xPercentage: number,
  yPercentage: number,
  totalPercentage: number,
  eventsFired: number,
  hasScrolled: boolean,
}
