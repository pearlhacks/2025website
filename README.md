# PearlHacks 2025 Frontend

This repository contains the frontend code for the Pearl Hacks 2025 website.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [NextUI](https://nextui.org/) - Modern UI component library
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [React Query](https://tanstack.com/query/latest) - Data-fetching and state management
- [Firebase Hosting](https://firebase.google.com/docs/hosting) - Web hosting platform

## Project Structure

```
├── public/              # Static assets and styles
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── about/      # About page
│   │   ├── faq/        # FAQ page
│   │   ├── resources/  # Resources page
│   │   ├── schedule/   # Schedule page
│   │   │   └── page.tsx
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/     # Reusable components
│   │   ├── Buttons/    # Button components
│   │   ├── FAQ/        # FAQ page components
│   │   ├── Footer/     # Footer components
│   │   ├── Homepage/   # Homepage components
│   │   ├── Navbar/     # Navigation components
│   │   ├── Resource/   # Resource page components
│   │   ├── Skeletons/  # Loading UI components
│   │   └── GenericLayout.tsx  # Parent layout (except homepage)
│   │
│   └── api/      # Functions to get/update data externally
```

### Page Structure
To add new pages:
1. Create a new directory in `src/app` with the page name
2. Add a `page.tsx` file inside the directory
3. The route will automatically be created based on the directory name

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/pearlhacks-2025-frontend.git
cd pearlhacks-2025-frontend
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
