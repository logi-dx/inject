import { Constructor } from './Constructor';
import { DependencyType } from './DependencyType';

export type Dependency<T> = {
  implementation: Constructor<T>;
  type: DependencyType;
  instance: T | undefined;
};
