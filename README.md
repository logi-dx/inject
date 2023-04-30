# Logi-DX Injection

The purpose of this library is rather simplistic in the sense that it's designed to simply 
enable typescript applications to use soe degree of dependency injection through the use 
of a series of decorators. 

## Inject 

The ```@Inject``` decorator is intended to decorate class properties, just to help clear up 
the likes of any mess that might accumulate within the constructor & so on. 

An example of how you might consume this might look something along the lines of:

```typescript

interface IUsersRepository {
    // Some interface for the users repository.
}

@Injectable()
class UsersRepository implements IUsersRepository {
    // Some code associated with users & persistent storage.
}

class UsersController {
    @Inject(UsersRepository)
    private repo: IUsersRepository;
}
```

## Injectable 

Since the example above references, I thought it might be wise to simply 
specify the intention of this decorator. The ```@Injectable``` decorator 
is intended to be a class decorator, in doing so, you're informing the 
IOC container that a given class can be injected elsewhere in the code
base. 

## Singleton
The ```@Singleton``` decorator is very similar to the ```@Injectable```
decorator, the difference being that you're informing the IOC container 
that you'd like to create the given dependency as a singleton as opposed 
to creating a new instance of the class every time you want to reference 
the given dependency. 

```typescript
interface IUserManager {
    addUser(): void;
    removeUser(): void;
    countUsers(): number
}

@Singleton()
class UserManager implements IUserManager {
    // Some silly example. 
    private userCount: number;

    public constructor() {
        this.userCount = 0;
    }

    public addUser(): void {
        this.userCount ++;
    }

    public removeUser(): void {
        this.userCount --;
    }

    public countUsers(): number {
        return this.userCount;
    }
}

class Application {
    @Inject(UserManager)
    private manager: IUserManager;
    
    public main() {
        manager.addUser();
        manager.addUser();
        console.log('Example #1', manager.countUsers());
    }
}

class Demo {
    @Inject(UserManager)
    private manager: IUserManager;
    
    public main() {
        manager.addUser();
        manager.addUser();
        console.log('Example #2', manager.countUsers());
    }
}

// Just to run the above code. 
new Application().main();
new Demo().main();
```