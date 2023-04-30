import { Constructor } from './Constructor';
import { Container } from './Container';
import { Dependency } from './Dependency';
import { DependencyType } from './DependencyType';

export const Inject = (dependency: Constructor<any>): any => {
  return () => {
    return () => {
      const container: Container = Container.getInstance();
      const service: Dependency<any> = container.get(dependency);
      const isSingleton: boolean = service.type === DependencyType.SINGLETON;

      if (isSingleton) {
        const instance: any = service.instance as any;
        return instance;
      }

      return new service.implementation();
    };
  };
};
