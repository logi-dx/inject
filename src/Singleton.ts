import { Constructor } from './Constructor';
import { Container } from './Container';
import { DependencyType } from './DependencyType';

export const Singleton = () => {
  return (target: Constructor<any>, _context: any): void => {
    const container: Container = Container.getInstance();
    container.set(target, DependencyType.SINGLETON);
  };
};
