## Project Title:
MealMate– A Smart Recipe Search Web Application.
## Overview:
MealMate is a web-based application that allows the user to search for recipes based on ingredients or dish names. The purpose of this application is to help users to quickly find meals they want to cook with the ingredients they have. The main objective of this project is to create an intuitive and responsive platform where users can explore recipes, view detailed cooking instructions, and save their time from the hassle of thinking how to cook their favorite meals with the available ingredients. This project will demonstrate key concepts such as component-based architecture, state management, routing, API integration, and responsive web design.

## Pages project has:
1. home page
2. about page
3. contact page
4. faq page
5. recipe detail page (dynamic route)

## Components
1. Header
2. Footer
3. SearchBar
4. RecipeCard
5. BackToTop

## Core Features:
Main Features of this application are:
•	Can search recipes using its name or ingredients
•	Displays recipe result in a grid layout
•	Avails viewing detailed recipe information (ingredients, instructions, image)
•	The user can save their favorite recipes
•	Responsive design for mobile and desktop

## Core concepts demonstration:
•	Component-based Architecture:
The app will be built using the reusable components like SearchBar, RecipeCard, RecipeList and RecipeDetails which makes it more readable and can help while debugging.

•	State Management:
The application will use react’s state management tools such as useState to manage the dynamic data across the application. This includes storing search queries, fetch recipe results, etc.
The below mentioned are the features created using state:
- Search input
- Recipe results
- Loading state
- Error handling

•	Routing:
Next.js Routing will be used to let the user navigate from one page to another without page reloading. The application will include multiple routes such as the Home Page, Recipe Detail Page, etc.

•	API Integration:
The application will use an external API to fetch the real-time recipe data, allowing the app to retrieve recipe lists, images, ingredients, and instructions.

•	Styling:
The application will also have its ui to make the user experience more efficient and convenient. This will be done using styling techniques like CSS Modules.

Technology Stack:
•	Front-end: React, Next.js Routing
•	Styling: TailwindCSS/ CSS modules
•	API: TheMealDB API (for fetching recipes, ingredients, and images)
•	Vercel: for project deployment 



