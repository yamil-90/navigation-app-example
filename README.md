# navigation-app-example

In this simple app we see the basic implementation of React navigation native in a short and sweet app made in bare react native

## Package documentation

[link1](https://reactnavigation.org/)

## Steps to Install (react navigation v6.x)

* first we install the package

yarn
```
yarn add @react-navigation/native
```
npm
```
npm install @react-navigation/native
```
* then we need to add the dependencies (for bare react native project)
yarn
```
yarn add react-native-screens react-native-safe-area-context
```
npm
```
npm install react-native-screens react-native-safe-area-context
```

* react-native-screens package requires one additional configuration step to properly work on Android devices. 

Edit MainActivity.java file which is located in android/app/src/main/java/(com)?/[your package name]/MainActivity.java

*the com folder was not mentioned in the documentation but was present in my project*

Add the following code to the body of MainActivity class:
```
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```
and make sure to add an import statement at the top of this file:
```
import android.os.Bundle;
```

* we are gonna use the stack navigation so after this we install it

yarn
```
yarn add @react-navigation/native-stack
```
npm
```
npm install @react-navigation/native-stack
```

* finally we import the navigation and stack in our app.js

```
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen />
          <Stack.Screen />
          <Stack.Screen />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
```