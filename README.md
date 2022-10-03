# webapp-basic

This is a website boilerplate pre-configured with sass and structured to make web development easy

<br />
<br />


### What this kit includes:

```
./sass.sh
```
Start the sass transpiler. This enables sass to look for changes to scss files.
<br />

```
src/assets/
```
This is where you write sass (scss folder), which is converted to plain css (css folder). There is only one output css file. All other changes are made to scss files. 
<br />
```
src/assets/scss
```
scss files are organized into a four folder structure.

abstracts   - Fonts, Colors, Commonly used values <br />
base        - Generic styling. Primarily things applying to root <br />
components  - Component specific styling <br /> 
layouts     - Web/Mobile compatibile layouts <br />


Each folder contains a ``` __name-dir.scss ``` file. 
This file is used to import scss from files in the same category. Whenever you write a new scss file in the same category, don't forget to include the import!



