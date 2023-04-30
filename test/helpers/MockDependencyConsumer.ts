import { Inject } from '../../src';
import { MockSingletonDependency } from './MockSingletonDependency';
import { MockDependency } from './MockDependency';

export class MockDependencyConsumer {
    @Inject(MockDependency)
    public dependency: MockDependency;

    @Inject(MockSingletonDependency)
    public singleton: MockSingletonDependency;

    public constructor() {
        // Nothing to do here.
    }
}

export class OtherMockDependencyConsumer {
    @Inject(MockSingletonDependency)
    public singleton: MockSingletonDependency;

    public constructor() {
        // Nothing to do here.
    }
}