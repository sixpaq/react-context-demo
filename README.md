
# Context Demo

## Run this demo
First clone this repository, than run:
```
npm install
npm start
```

## Shared context state
The DemoContext implements a react context. In this demo, the context holds a selected
value (name) and a function to set the selected value (setName).

## Context usage
To use the context import ```useDemoContext``` from DemoContext.tsx. This function used
React's useContext which can not be called within a class, but only within a function as
is shown in this demo.

In the App.tsx the content is wrapped by DemoContextProvider. This provider holds the state
of the context. It provides the state.

## Components

## Button
The button uses the context to **change** the selected value. To change is it uses the setName
function which is provided by the context.
```
  const { setName } = useDemoContext();
```

## StatusBar
The statusbar use the context to **show** the selected value. To show this it aqcuires the
name value from the context.
```
  const { name } = useDemoContext();
```
