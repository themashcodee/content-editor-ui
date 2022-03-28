# Content Editor - LRNR Interview Assignment

## Tech Stack 
Below are the frameworks and libraries that are used in this project  
Nextjs - A Production Ready React.js framework to create robust and fast react application.  
TailwindCSS - A utility first CSS framework to build absoluely beautiful user interfaces   
Typescript - A strongly typed language that build on Javascript  
Tiptap React - A Headless rich text editor.  
Recoil - A state management library built by Facebook

## How to run locally or contribute

First of all clone the repo  
`git clone https://github.com/themashcodee/content-editor-ui.git`  

Then Change directory  
`cd content-editor-ui`  

Install the dependency  
`yarn install`

Run in the local environment  
`yarn dev`  

Change anything in tthe pages/index.tsx file and see the updated changes on the localhost:3000  
That's all you have to do test the application locally.

## Folder Structure
- components  
    **core** - This folder contains all the common custom reusable components that are being used throughout the application such as head, header, tooltip etc  
    **icons** - This folder contains all the svg custom reusable component that are being used throughout the application  
    **pages/home** - This folder contains all the component used in the home page
- helpers - This folder contains all the helper function that are common and can be reuse
- hooks - This folder contains all the custom hooks
- pages - This folder contains all the pages and api routes of nextjs
- public - This folder contains all the public assets
- store - This folder contains all the Recoil Atoms (same as redux slice)
- styles - This folder contains all the css style files
- types - This folder contains all the typescript types except Props (props type are defined in the component file itself)