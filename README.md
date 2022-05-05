# PicLab - Take Home Test from Monogram.io
## The Challenge 
Implement Homepage from Figma Design within a week.
## Tech Stack
* Next.js
* Prismic CMS
* TailwindCSS
* Vercel

## Getting Started  

First, run the development server:
```bash
npm run dev
# or
yarn dev
```
To Start Slice Simulator:
```bash
npm run slicemachine
# or
yarn dev slicemachine
```

Open [http://localhost:3000](http://localhost:3000) to view PicLab  
Open [http://localhost:9999](http://localhost:9999) to view Slice Simulator 


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## What was Learned 
### 1. Worse is Better Principal  
It is not only valid, but true. When faced with a deadline, while faced with  the challenge of using a completely foreign tech stack. It is imperative to break the problems down  into bit size atomic pieces. 
### 2. Iterate Iterate Iterate 
Following the `Worse is Better Principal` -- Just Start. 
* Start with a Skelaton.
* Build Atomics into Molecules into Organisms.
### 3. Refactor Refactor Refactor
TDD/BDD basically preaches this. Just get something on the page then refactor like mad. Atleast have an `MVP` or `Protoype` to be able to show something. 
### 4. Pareto Principle
* I should have jumped immediately into the static version of the Homepage.
Instead what I did was spent 4 hours reading docs on the first about Prismic.io  -- Knowing nothing about Prismic and getting the server running is an achievement, however, an MVP is more important.
* Instead of working in a descending, top to bottom, approch. After getting the grid layout implemented, I should have when straight into implementing `Feature Banners` as they were the bulk of the page. The Declaritive nature of React allows this to happen seemlessly 
    * Then the `Header` and `Footer`
    * Followed by the rest of the document
### 5. TailwindCSS has a Mobile First Paradigm
* Write styles for Mobile natively then iterate with the `md` and `lg` prefix