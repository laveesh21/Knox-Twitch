# What Did You Learn

### To make a Client route - page.tsx
- To make a route we need to make a folder in app and the use *page.tsx* as default page 
- Any page other than page.tsx will not work for route.
- Page is used to make client route

### To make API route - route.ts 
We don't have default export router.ts so we do function export. 

### Root layout.tsx
In layout we set children variable in return()
This layout do not render everytime a child renders.

### Server Component and Client Component
Component in app folder is server component by default
We need to tell "use client" to convert it into client component.

## Authentication
Using Clerk.com for Authentication with google account
clerk used middleware to check if the user is logged in or not


## Setting up dark theme
Using next-theme in .root-layout from SHADCN/UI
import dark in .root-layout
Using ThemeProvider in .root-layout to wrap children inside it.
Setting ThemeProvider to dark mode to make SignUP and SignIN dark ThemeProvider
