# Next.js GraphQL GraphCMS Blog

<img src="https://github.com/Shaban-Eissa/Next-GraphQL-GraphCMS-Blog/assets/49924090/a3a4963c-11c1-42df-a790-db4b85778387" width="420" height="150" />

This is a blog project built with Next.js, GraphQL, and GraphCMS.

## Table of Contents

* [Features](#features)
* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Contributing](#contributing)

## Features

- **Dynamic Routing:** Utilizes Next.js for dynamic routing and page generation.
- **GraphQL Integration:** Connects to a GraphQL API to fetch and display blog content.
- **Responsive Design:** Ensures a seamless experience on various devices.

## Demo

<img src="https://github.com/Shaban-Eissa/Next-GraphQL-GraphCMS-Blog/assets/49924090/7fdd96cb-b32f-463f-964d-593ad92ae388" width="900" height="380" />
<br/>
Check out the live demo https://next-graph-ql-graph-cms-blog.vercel.app


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Shaban-Eissa/Next-GraphQL-GraphCMS-Blog.git
   ```

2. **Install dependencies:**
    
    ```bash
    cd Next-GraphQL-GraphCMS-Blog
    npm install
    ```
    
3. **Set up GraphCMS:**
    
    * Create an account on [GraphCMS](https://hygraph.com) if you don't have one.
    * Set up a new project and obtain your API credentials.
4. **Create a `.env` file:**
    
    Create a `.env` file in the root directory and add your GraphCMS API credentials:
    
    ```env
    NEXT_PUBLIC_GRAPHCMS_ENDPOINT=your_graphcms_endpoint
    GRAPHCMS_TOKEN=your_graphcms_token
    ```
    
5. **Run the development server:**
    
    ```bash
    npm run dev
    ```
    
6. **Open your browser:**
    
    Navigate to `http://localhost:3000` to view the blog.
    

## Usage

* **Fetching Blog Data:**
    
    The blog data is fetched using GraphQL queries. You can customize the queries in the `services/index.js` directory.
    
* **Customizing Styles:**
    
    The styles are written using CSS modules. You can modify the styles in the `styles` directory to match your design preferences.
    
* **Adding New Blog Posts:**
    
    To add new blog posts, you can create new one with GraphCMS



## Technologies

- Next.js
- GraphQL
- GraphCMS
- TailwindCSS



## Contributing

Feel free to contribute by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated.

