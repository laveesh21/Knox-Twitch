# Livestream App Development with Next.js

Summary of youtube video [TwitchClone-Part1](https://www.youtube.com/watch?v=a02JAryRPVU&t=3519s) by [CodeWithAntonio](https://www.youtube.com/@codewithantonio) using NextJS.

## Introduction

- **00:00** 🎮 Building a livestream app with Next.js
  - Introduction to a Twitch clone build in Next.js
  - Live stream player with controls, live user indicators, and viewer count displayed

- **02:18** 🚫 Moderation and chat settings
  - Block and unblock user functionality for streamers
  - Chat settings customization including chat delay and follower-only chat rule
  - Collapse layout elements for a better viewing experience during live streaming

- **04:32** 🛑 Streamer actions and media streaming setup
  - Starting and stopping a live stream from a streaming software like OBS Studio
  - Guide to streaming setup using RTMP or WebSocket connection
  - Creating a live stream experience as a streamer and viewer with real-time interaction

- **07:32** 🌐 Setting up Next.js for the livestream app
  - Installation guide for Node.js and checking the Node version
  - Initializing a Next.js application project with specific configuration options
  - Exploring the project structure and running the Next.js application

- **10:29** 💻 Customizing components with Shaden UI
  - Installing Shaden UI for reusable components in the app
  - Adding a custom button component and exploring variant options
  - Utilizing Shaden UI for complete ownership and control over components

- **20:22** 🛣️ Routing in Next.js for client-side rendering
  - Understanding Next.js routing structure and reserved naming conventions
  - Creating client routes by organizing files in specific folders
  - Explaining the significance of default exports and reserved file names in Next.js routing

- **22:44** 🧭 Understanding Naming Conventions for Routing
  - Routes in the Next.js app folder require specific naming conventions, like `page.tsx` for client routes and `routes.tsx` for API routes.

- **27:15** 🖼️ Layout Files in Next.js
  - Layout files are essential in Next.js and must exist in the app folder, serving as the wrapper for rendering content.

## Authentication
- **36:13** 🔄 Server vs. Client Components in Next.js
  - Next.js default components are server components, suitable for SEO and database connections.
  - Client components for interactivity require adding `useClient` to convert server components.

- **46:22** 🛠️ Setting up authentication with Clerk
  - Setting up authentication middleware and route groups.
  - Integrating Clerk Provider in the layout file.
  - Adding authentication requirements for app access.

- **50:25** 🧩 Creating custom sign-up and sign-in pages
  - Creating separate routes for sign-up and sign-in.
  - Utilizing route groups for specific page layouts.
  - Importing Clerk components for user authentication functionalities.

- **54:13** 🔄 Implementing user authentication actions
  - Testing user authentication features such as log in and log out.
  - Adding user buttons for account management.
  - Styling the login screen for improved user experience.

## Dark Theme
- **01:08:59** 🎨 Styling the App
  - Styling elements using class names and text properties.
  - Utilizing font class names efficiently.
  - Implementing special characters like apostrophes in the text.

- **01:11:45** 🌓 Enabling Dark Mode
  - Changing the app theme to dark mode for improved visibility.
  - Installing clerk themes and configuring dark mode.
  - Implementing the dark theme in the application for consistency.

- **01:16:23** 🔑 User Authentication and Username Settings
  - Making usernames required during user sign-up.
  - Managing username settings in Clerk dashboard.
  - Ensuring uniqueness of usernames and user interaction with the settings.

- **01:20:44** 🔄 Database Integration Preparation
  - Setting up the prerequisites for connecting the application to a database.
  - Exploring database options and considerations.
  - Installing necessary packages and initializing database configurations.

## Database setup
- **01:31:50** 🔌 Setting up Localhost for Webhooks
  - Need to expose Localhost to connect web hooks.
  - Install ngrok to expose Localhost to the internet.
  - ngrok setup is essential for developing and testing webhooks.

- **01:39:04** 🌐 Establishing Stable URLs for Webhooks
  - Use ngrok to get a stable URL for webhooks during development.
  - Create a stable static domain in ngrok's free tier.
  - Having a stable URL simplifies connecting webhooks.

## Clerk Webhook
- **01:40:23** 🎣 Creating and Configuring Webhooks
  - Enable and configure webhooks in Clerk dashboard.
  - Obtain a signing secret for webhooks.
  - Store signing secret in the environment file for security.

- **01:53:18** 🧑‍💻 Setting up and testing API webhooks
  - Steps to enable API webhooks as public routes and test access
  - Troubleshooting unauthorized access to webhook routes
  - Testing webhook functionality with different events like user created or deleted

- **01:56:53** 📊 Connecting to Prisma and updating database with user information
  - Creating a user model in Prisma database when a user logs in using Clerk
  - Retrieving and storing user information such as ID, username, and image URL
  - Verifying database synchronization by running tests with Prisma Studio

- **02:01:38** 🔄 Updating user information based on web hook events
  - Handling user updated events to modify username or image URL in the database
  - Implementing user deletion events to remove users from the database
  - Verifying database changes in real-time to ensure synchronization with Clerk

- **02:06:22** 🖥️ Refactoring app layout and components
  - Restructuring the app layout by creating browse and home folders
  - Implementing a Navbar component with logo and navigation links
  - Styling the Navbar component for mobile responsiveness and user interaction

- **02:16:26** 🛠️ Creating a Search Input Component
  - Components in the app router are server components by default
  - Explicitly mark a component as use client to make it a client component
  - Recognize client vs. server components using console logs

- **02:19:53** 🧩 Adding Search Functionality
  - Importing necessary packages and components for search functionality
  - Implementing search functionality with input value and on submit event
  - Adding function to clear search input with an X icon

- **02:29:49** 📊 Creating User Actions Component
  - Dynamically rendering components based on user login status
  - Utilizing conditional rendering for different user actions
  - Styling components for a cohesive user interface

- **02:40:17** 🖼️ Developing Navbar Logo Element
  - Adjusting the logo display in the navbar
  - Adding a dynamic text element alongside the logo
  - Ensuring proper spacing and visibility on different device sizes

- **02:42:58** 📜 Developing Collapsible Sidebar
  - Implementing a collapsible sidebar in the layout
  - Creating components for sidebar functionality
  - Utilizing server and client components for appropriate functionality

- **03:01:11** 🛠️ Creating a hint component for buttons
  - Developing a hint component to provide user tooltips for buttons
  - Utilizing the tooltip provider, trigger, and content for tooltip functionality
  - Customizing tooltip appearance and behavior based on user interaction

- **03:06:12** 📱 Implementing automatic sidebar collapsing on mobile
  - Automatically collapsing the sidebar on mobile to optimize user experience
  - Implementing responsive design to adjust sidebar display based on device type
  - Utilizing media queries and useEffect to control sidebar behavior effectively

- **03:14:01** 🤝 Adding a recommended users section to the sidebar
  - Creating a service to recommend users based on database content
  - Developing a client component to display recommended users in the sidebar
  - Customizing the sidebar layout to show recommended users only in certain conditions

- **03:24:37** 🛠️ Creating User Item Component
  - Creating a reusable user item component called UserItem.
  - Adding dependencies such as Avatar and Skeleton.
  - Passing props like username, image URL, and is live to the UserItem component.

- **03:27:21** 🎨 Styling User Item Component
  - Importing necessary modules like usePathname and CN for styling.
  - Implementing dynamic styles based on sidebar state and active status.
  - Styling the UserItem component with a button, link, and user avatar.

- **03:36:11** 🎖️ Configuring User Avatar Component
  - Defining props for the user avatar component like username, image URL, is live status, and show badge.
  - Implementing variant props for specifying avatar sizes.
  - Creating a user avatar skeleton component for loading states.

- **03:47:04** 🪴 Skeleton Components Creation
  - Creating skeleton components to represent loading states.

- **03:53:32** 🦴 Fixing Hydration Error
  - Addressing hydration error by controlling component rendering on the client.
  - Use of useEffect to switch rendering behavior based on client-side detection.

- **04:05:20** 🛠️ Resolving Hydration Error Further
  - Explanation of server-side rendering, client components, and hydration errors.
  - Introducing the use of isClient hook to handle hydration issues more efficiently.

- **04:09:27** 🛠️ Modifying recommended service
  - Modifying the recommended service to exclude currently logged in users.
  - Updating the recommended service to handle logged out and logged in users differently.
  - Implementing user ID handling and dynamic queries based on user status.

- **04:12:46** 🔄 Setting up new user accounts
  - Instructing on creating new user accounts for testing purposes.
  - Explanation of generating stable URLs for new user account setup.
  - Verifying the matching URL and web hooks for new user account creation.

- **04:19:23** 🔗 Creating follow functionality
  - Adding Prisma schema structures for followers and followings.
  - Demonstrating setting up relationships and indexes in the Prisma schema.
  - Running Prisma commands to update the database with new models and relationships.

- **04:32:01** 🕵️ Function to follow a user
  - Creating a function to follow a user with error handling for self-following and existing follows.
  - Implementing the follow function with database operations.
  - Exploring server actions, basic implementation, and practical examples.

- **04:34:00** 🤖 Introduction to actions and RPC
  - Setting up actions as built-in RPCs for API-less mutations in Next.js.
  - Demonstrating how to create actions, call them from client components, and handle loading states.
  - Exploring the integration of actions with server-side logic for API functionality.

- **04:40:05** 💬 Adding user interaction and feedback
  - Implementing user interaction features like follow/unfollow buttons based on user status.
  - Integrating error and success messages using a toast package.
  - Enhancing user experience by providing visual feedback for follow/unfollow actions.

- **04:57:01** 🔄 Implementing a follow system
  - Implemented handle follow and handle unfollow functions
  - Demonstrated how to modify database relations when following/unfollowing users
  - Discussed the simplicity of server actions compared to API routes

- **05:00:22** 🔄 Creating a sidebar for followed users
  - Developed a function to retrieve followed users from the database
  - Updated the sidebar components to include followed users
  - Showed how to handle loading skeletons and data visibility based on user relationships

- **05:10:24** 🔄 Enhancing the recommendation system
  - Modified the recommended service to exclude users being followed
  - Implemented changes to display recommended and followed users based on user interactions
  - Ensured proper data display in the sidebar by adjusting the loading skeletons and user visibility

- **05:17:26** 🔄 Setting up the block system
  - Created a new Prisma model for blocking users
  - Developed a block service to check if a user is blocked by another user
  - Integrated database queries and error handling for user blocking functionality

- **05:19:38** 🚫 Blocking Logic Implementation
  - Implementing functions to check if a user is blocked, block a user, and unblock a user.
  - Checking for existing blocks before taking action to avoid redundant database queries.
  - Using unique constraints for better database query performance.

- **05:21:39** 🔒 User Blocking Functionality
  - Creating functions to block and unblock users in the application.
  - Handling edge cases like trying to block oneself or unblock non-blocked users.
  - Defining success messages and ensuring a smooth user experience during blocking interactions.

- **05:27:30** 🔄 Integrating Blocking Services with Server Actions
  - Connecting the block service functions with server actions for user interactions.
  - Testing and validating the block and unblock functionalities within the application.
  - Planning for future improvements like loading all blocked users and integrating with other features like chat functionality.

- **05:43:04** 🚫 Blocking Service Setup
  - Implemented blocking and unblocking users functionality.
  - Users are able to control who can view their profiles.
  - Design choice: Users can block others from their stream but still view the blocked user's profile.

- **05:45:21** 🎥 Creator Dashboard Setup
  - Creation of a user dashboard where settings can be controlled.
  - Preparation of the structure for the creator dashboard page.
  - Implementation of a user-specific dashboard using unique URLs.

- **05:58:41** 📐 Creator Page Styling
  - Styling adjustments for the Creator Dashboard.
  - Modifications to the navbar and actions components.
  - Addition of an exit button and user-specific functionalities.

- **06:05:33** 🖱️ Creation of sidebar toggle button
  - Implementation of collapse and expand functionality in the sidebar toggle button.
  - Utilization of icons and class names to control the appearance and behavior of the toggle button.

- **06:06:43** 📃 Implementation of collapsed state rendering
  - Creation of the UI elements in the collapsed state of the sidebar toggle button.
  - Setting up styles and components for the collapsed view layout.

- **06:07:09** 🎛️ Development of not collapsed state
  - Designing the layout for the not collapsed state of the sidebar toggle button.
  - Defining the functionalities and appearance of the toggle button in the not collapsed state.

- **06:29:11** 🏗️ Setting up full text search for the stream name
  - Setting up full text search in MySQL for stream name in Prisma
  - Process of enabling full text search and full text index for MySQL database
  - Importance of adding full text search for better search functionality

- **06:31:04** 🔄 Resynchronizing database and Clerk after modifications
  - Clearing all users from both the database and Clerk
  - Steps to reset the database and re-synchronize collections
  - Ensuring the database and external services are in sync after modifications

- **06:33:56** 🧰 Preparing to test webhooks functionality
  - Starting app locally and verifying the functionality
  - Updating webhook URLs for proper functionality
  - Testing webhook events after creating a new user

- **06:37:37** 🧩 Implementing toggle functions in the app
  - Creating toggle components in the app interface
  - Defining properties like enabling/disabling chat features
  - Developing server actions to update stream data based on toggle settings

- **06:51:14** 🛠️ Updating stream server action
  - Updating stream data with valid information.
  - Revalidating paths related to stream updates.
  - Implementing server-side actions for updating stream data.

- **06:52:12** 🔄 Implementing UI functionality
  - Importing necessary components for the UI.
  - Creating an onchange function for updating stream data.
  - Displaying success or error messages based on stream update status.

- **06:54:46** 🖥️ UI interaction and database updating
  - Demonstrating the UI interaction with the updated stream data.
  - Checking and updating stream data in the database.
  - Resolving issues related to updating stream data visibility in the UI.

