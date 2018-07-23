# Evolent-Contact-Application

## Technologies

- React Native
- Expo Framework

## Installation

```
npm install
exp start
Get Expo Client and enter url
```

## Features

- [x] Ability to delete contact
- [x] Ability to add a contact
- [x] Ability to edit contact

## Folder Structure
```bash
├── README.md - This file.
├── package.json
├── assets
│   ├── fonts # custom fonts
├── App.js #File that holds root of app startup code
└── src
    ├── components # holds each page as a seperate component
    │   └── ContactDetail # Page that shows the detail of the contact
    │   └── ContactsPage  # Main Page that shows list of contacts
    │   └── EditContact # Page that allows you to edit a contact
    │   └── CustomRouter # Component that allows redux to work with react-router-native-flux
    │   └── Styles # Holds Global styles
    ├── pages # holds pages that have redux store attached to it
    │   └── ContactsPage
         │   └── Container # Holds container that wraps redux on the component
         │   └── reducks # Holds reducks related files 
              │   └── creators # Holds actions
              │   └── reducers # Holds reducers
              │   └── reducers # Holds intial redux model for page
         │   └── saga # Holds sagas setup for page 
    ├── routes # holds setup of routes
    └── store # holds files to connect sagas and redux to application
```

#### Main Contacts Page

<p align="center">
<img src="https://github.com/d7laungani/Evolent-Contact-Application/blob/master/images/main.png" width="350" height="600" />
</p>

#### Contact Detail Page

<p align="center">
<img src="https://github.com/d7laungani/Evolent-Contact-Application/blob/master/images/details.png" width="350" height="600"/>
</p>

#### Editing Contacts Page

<p align="center">
<img src="https://github.com/d7laungani/Evolent-Contact-Application/blob/master/images/edit.png" width="350" height="600"/>
</p>
