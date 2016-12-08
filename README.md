All you have to do:

Installation:

1. Clone project
2. run npm install (in root folder)

Serve:
1. run npm start (in root folder)

Test:
1. run npm test (in root folder)


That's it.  package.json has all dependencies needed

About project

This was my first attempt ever at React & Enzyme/Mocha
I wrote it in es5 to get the hang of it
Then wrote it in es6, found some areas I could improve it, and went back to improve them here
... You can see that in the commits actually
I just reconfigured how the checkboxes work, and it changed how the total is calculated

./src/
- component.jsx
-> contains react component

- index.jsx
-> contains reactDOM render
-> imports component from component.jsx

./test/
-> calculate-markup.spec.js
-> contains all unit tests in enzyme,chai, mocha
just run npm test in root folder

bundle.js
-> for compiled JS .. you can just ignore this file

index.html
has div with id for rendering component

package.json configured everything
webpack builds project (npm start in root folder)
