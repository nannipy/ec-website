# EC Website - Building the Future with Precision

A modern, high-performance construction and renovation showcase platform built with precision and aesthetic excellence. This project serves as a digital portfolio for EC, highlighting their expertise in historical restoration and high-end residential projects.

## 🚀 Features

- **Dynamic Hero Section**: Impactful landing with smooth animations and curated imagery.
- **Project Showcase**: A masonry-style gallery featuring high-end restoration and residential projects.
- **Interactive Forms**: Seamless contact and inquiry system with real-time validation.
- **Responsive Design**: Fluid experience across all devices, from mobile to desktop.
- **Performance Optimized**: Built on Next.js 16 for lightning-fast delivery and optimal SEO.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Runtime**: [Bun](https://bun.sh/)

## 🏗️ Architecture

The project follows a clean, component-based architecture for maximum maintainability:

```text
├── app/               # Next.js App Router (Pages & Layouts)
├── components/        # React Components
│   ├── ui/            # Primitive UI components (Shadcn)
│   ├── layout/        # Shared layout elements (Header, Footer)
│   └── features/      # Business-specific components (Hero, Gallery)
├── data/              # Static data and project metadata
├── lib/               # Shared utilities and helper functions
└── public/            # Static assets (Images, Videos, Fonts)
```

## 🚦 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/nannipy/ec-website.git
    cd EC
    ```

2.  **Install dependencies**:
    ```bash
    bun install
    ```

3.  **Run the development server**:
    ```bash
    bun dev
    ```

4.  **Build for production**:
    ```bash
    bun run build
    ```

## 📈 Performance & SEO

- **Image Optimization**: Using `next/image` for automatic format selection and lazy loading.
- **Semantic HTML**: Proper heading hierarchy and landmark elements for accessibility.
- **Speed**: leveraging Next.js static rendering and streaming for instant page loads.

## 📄 License

This project is private and confidential. All rights reserved.
