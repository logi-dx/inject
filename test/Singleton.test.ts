import { MockDependencyConsumer, MockSingletonDependency, OtherMockDependencyConsumer } from './helpers';

test('@Singleton Works', () => {
    const tester = new MockDependencyConsumer();
    const other = new OtherMockDependencyConsumer();

    expect(tester.singleton).toBeInstanceOf(MockSingletonDependency);
    expect(tester.singleton).toEqual(other.singleton);
});