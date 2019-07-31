# Nativescript-Angular Integration with TypeORM

- **NativeScript** : Runs Javascript as Native apps on Android and iOS
 - **Angular**: A frontend framework that can be used in NativeScript
 - **nativescript-sqlite**: A Sqlite library for {N}, used here as the Sqlite driver
 - **TypeORM**: A TypeScript/ES7 based ORM that works on NodeJS as well as browsers

## Demo
As you can see the task list is persisted even when the app
is killed and reopened.

![demo](vid.gif)

## Connection 
```typescript
import {createConnection, getManager} from "typeorm/browser";
import Todo from './models/Todo';
//driver
let driver = require('nativescript-sqlite');

(async () => {
    try {
        const connection = await createConnection({
            database: 'test.db',
            type: 'nativescript',
            driver,
            entities: [
                Todo
            ],
            logging: true
        })

        console.log("Connection Created")

        // setting true will drop tables and recreate
        await connection.synchronize(false) 

        console.log("Synchronized")


    } catch (err) {
        console.error(err)
    }
})();
```

Visit <https://github.com/typeorm/nativescript-vue-typeorm-sample> to see step by step how to do this, just keep in mind you have to do the connection like this to make it work with Angular. This was based on his example.
