# webapp-basic

This is a website boilerplate, pre-configured with sass and structured to make web development easy

<br />

 <img src="https://publicsrv.s3.us-west-2.amazonaws.com/webapp-basic-screen" alt="An example website layout built in this boilerplate" height="80%" />
 An example website layout built in this boilerplate

<br />

### Getting started
```
git clone https://github.com/gnikxela0328/webapp-basic
cd webapp-basic/
npm install
```

You also need to install sass globally
```
sudo npm install -g sass
```

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
This is where you write sass (scss folder), which is converted to plain css (css folder). <br /> There is only one output css file. You only need to make changes to scss files. 
<br />
```
src/assets/scss/
```
scss files are organized into a four folder structure.

abstracts   - Fonts, Colors, Commonly used values <br />
base        - Generic styling. Primarily things applying to root <br />
components  - Component specific styling <br /> 
layouts     - Web/Mobile compatibile layouts <br />


Each folder contains a ``` __name-dir.scss ``` file. 
This file is used to import scss from files in the same category. Whenever you write a new scss file in the same category, don't forget to include the import!



