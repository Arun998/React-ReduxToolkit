# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# React-redux Toolkit

# Redux
### It is an Architectural concept to manage the application state predictably.

# Redux Terminologies

### A centralised  (store) for (state) for the entire Application.
### You can not make mutable update to a state. All updates are update update immutably by using IMMER.
### The UI(view). (Dispatches) something called (Actions) to update the state in global store.
### The Code logic That Updates the state immutably based on actions is called a (Reducer).
### The UI subscribed for a state update gets the updated state

# When To use Redux

### You have  large Application state that needed in many App places
### The state Update Frequently
### App code Size is Growing
### You think Its the right time

# Redux Data Flow
https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif
![image](https://user-images.githubusercontent.com/78887671/235850788-a5da0ecd-997a-4596-a06e-02640b52e16c.png)


In these Repository i created a canvas Slice which uses a Colors,Fontsize and FontStyle globally .

![image](https://user-images.githubusercontent.com/78887671/235848716-b6382a50-f015-44aa-b9ca-256419e8c82f.png)

