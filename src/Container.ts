import { Constructor } from './Constructor';
import { Dependency } from './Dependency';
import { DependencyType } from './DependencyType';

export class Container {
  private readonly dependencies: Map<string, Dependency<any>>;
  private static instance: Container;

  private constructor() {
    this.dependencies = new Map<string, Dependency<any>>();
  }

  public static getInstance(): Container {
    const noInstance: boolean = Container.instance === null || Container.instance === undefined;

    if (noInstance) {
      Container.instance = new Container();
    }

    return Container.instance;
  }

  public set<T>(constructor: Constructor<T>, type: DependencyType): void {
    const dependency: Dependency<T> = {
      implementation: constructor,
      type,
      instance: undefined,
    };

    if (type === DependencyType.SINGLETON) {
      dependency.instance = new constructor();
    }

    this.dependencies.set(constructor.name, dependency);
  }

  public get<T>(constructor: Constructor<T>): Dependency<T> {
    return this.dependencies.get(constructor.name) as Dependency<T>;
  }
}
