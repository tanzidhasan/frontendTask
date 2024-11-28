# Frontend Task
A web-based frontend project demonstrating modern web development practices with sharing components of one application to another. This repository contains two single-page application of an frontend coding challenge.
Here, "desktop" and "home" are independent single page project. But some components of "desktop" (i.e "navbar", "solve_needs", "footer") are shared with "home".


## Features
* **Modern Tools & Frameworks:** Utilizes the latest web technologies like **JavaScript (React), CSS3**, .
* **Clean Code Structure:** Easy-to-understand and maintainable codebase.
* **Component Sharing:** Using **"Module Federation"** methods of **"Webpack 5"** which are commonly called **"micro frontends"**, some components of one application are shared with another application.

## Installation & Setup
Follow these steps to clone and set up the project locally:
### "desktop" application
1. Clone the repository:
```bash
git clone https://github.com/tanzidhasan/frontendTask.git
```
2. Go to "desktop" directory first as it has the original component to share
```bash
cd frontendTask/desktop
```
3. Install dependencies
```bash
npm install
```
4. Now build the "desktop" application to serve
```bash
npm run build
```
5. Serve the "desktop" application
```bash
npm run serve
```
6. To browse the application go to "http://localhost:5151/"

After successfully building and serving the "desktop" application, while serving the "desktop" application, now preview "home" application

### "home" application

1. Go to "home" directory 
```bash
cd ..
cd home
```
2. Install dependencies
```bash
npm install
```
3. Now build the "home" application
```bash
npm run build
```
4. Preview the "home" application
```bash
npm run preview
```
5. To browse the application go to "http://localhost:5150/"

