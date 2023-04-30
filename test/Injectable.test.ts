import { MockDependency, MockDependencyConsumer } from './helpers';

test('@Injectable Works', () => {
    const tester = new MockDependencyConsumer();
    expect(tester.dependency).toBeInstanceOf(MockDependency);
});