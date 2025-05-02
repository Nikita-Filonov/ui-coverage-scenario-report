import { Config } from './Config';
import { AppCoverageState } from './Coverage/State';

export interface InitialState {
  config: Config;
  createdAt: string;
  appsCoverage: { [x: string]: AppCoverageState };
}
