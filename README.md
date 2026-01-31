
# NSS IET DAVV - Official Website

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Sanity](https://img.shields.io/badge/sanity-%23F03E2F.svg?style=for-the-badge&logo=sanity&logoColor=white)

Deployed at - https://nssiet.vercel.app

The official digital platform for the **National Service Scheme (NSS)** unit of **IET DAVV, Indore**. This application modernizes the unit's operations by replacing legacy PHP systems with a high-performance Jamstack architecture, facilitating dynamic content management for events, volunteers, and galleries.

## 🏗️ System Architecture

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 18** | UI component library using a virtual DOM for efficient updates. |
| **Language** | **TypeScript** | Statically typed superset of JavaScript for type safety and maintainability. |
| **Build System** | **Vite** | Next-generation frontend tooling offering fast HMR (Hot Module Replacement) and optimized production builds. |
| **Styling Engine** | **Tailwind CSS** | Utility-first CSS framework combined with **Shadcn/UI** (Radix Primitives) for accessible, consistent design. |
| **State Management** | **TanStack Query** | Handles server state, caching, and data synchronization with the CMS, eliminating complex `useEffect` chains. |
| **Routing** | **React Router v6** | Client-side routing for seamless navigation between pages (Home, Events, Team, etc.). |
| **Content Backend** | **Sanity.io** | Headless CMS delivering content via APIs. Stores schemas for `events`, `teamMembers`, `galleryImages`, and `siteSettings`. |
| **Form Handling** | **React Hook Form** | Performant form validation integrated with **Zod** schema validation. |
| **Animations** | **Framer Motion** | Library for declarative, production-ready animations. |

## 🚀 Key Features

* **Dynamic Event Management:** Fetches upcoming and past events directly from Sanity CMS using GROQ queries.
* **Interactive Gallery:** A media showcase that links images to specific events and photographers.
* **Modern "Glassmorphism" UI:** Features a dark-themed, translucent aesthetic (`glass-card`) custom-built with Tailwind utilities.
* **Real-time Team Grid:** Displays current volunteers and team hierarchy, sortable by role and name.
* **Optimized Performance:** Uses `vite-plugin-react-swc` for ultra-fast compilation and optimized asset loading.

## 🛠️ Installation & Setup

### Prerequisites
* **Node.js** (v18+ recommended)
* **npm** or **bun**

### 1. Clone the Repository
```bash
git clone [https://github.com/DevKan009/nssFrontend.git](https://github.com/DevKan009/nssFrontend.git)
cd nssFrontend

```

### 2. Install Dependencies

```bash
# Using npm
npm install

# OR Using Bun (Recommended based on lockfile)
bun install

```

### 3. Environment Configuration

Create a `.env` file in the root directory to configure the CMS connection.

```env
VITE_SANITY_PROJECT_ID=your_project_id_here
# Note: The code defaults to 'dohsuupt' if this variable is missing.

```

### 4. Start Development Server

```bash
npm run dev

```

The app will be available at `http://localhost:5173` (or the port specified by Vite).

## 📂 Project Structure

```text
src/
├── components/         # React Components
│   ├── ui/             # Reusable Shadcn/Radix UI primitives (Button, Card, Toast)
│   ├── Navbar.tsx      # Responsive Navigation Logic
│   ├── Hero.tsx        # Homepage Landing Section
│   └── Footer.tsx      # Site Footer
├── lib/                # Core Utilities
│   ├── sanityClient.js # Sanity CMS Configuration
│   ├── queries.js      # GROQ Data Fetching Queries
│   └── utils.ts        # Tailwind class merger (cn) & helper functions
├── pages/              # Route Views
│   ├── Index.tsx       # Homepage (Landing)
│   ├── Events.tsx      # Event Listings
│   ├── EventDetail.tsx # Dynamic Event Single Page
│   ├── Team.tsx        # Volunteer Directory
│   └── Gallery.tsx     # Photo Gallery
├── hooks/              # Custom React Hooks
│   ├── use-mobile.tsx  # Responsive detection logic
│   └── use-toast.ts    # Toast notification logic
└── App.tsx             # Main Layout & Route Definitions

```

## 📜 Available Scripts

* `npm run dev`: Starts the development server.
* `npm run build`: Type-checks and builds the app for production.
* `npm run preview`: Previews the built production app locally.
* `npm run lint`: Runs ESLint to identify code quality issues.

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add NewFeature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

## 👤 Author

**Kanha Agrawal (DevKan009)**

* GitHub: [@DevKan009](https://www.google.com/search?q=https://github.com/DevKan009)

## 📄 License

This project is licensed under the MIT License.
