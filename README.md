# MonstarX - Next.js + shadcn/ui Template

A production-ready, full-featured Next.js 13 template with shadcn/ui component library, TailwindCSS, and TypeScript.

## 🚀 Features

- ⚡️ **Next.js 13.5** - App Router with React Server Components
- 🎨 **shadcn/ui** - 47 pre-installed, accessible UI components
- 🔷 **TypeScript 5.2** - Full type safety
- 🎯 **TailwindCSS 3.3** - Utility-first CSS with animations
- 🌙 **Dark Mode** - Built-in theme switching with next-themes
- 📝 **Form Handling** - react-hook-form + Zod validation
- 📊 **Charts** - Recharts for data visualization
- 🎭 **Icons** - Lucide React icon library
- ♿️ **Accessible** - All components built on Radix UI primitives
- 🎪 **Rich Components** - Carousels, drawers, command menus, and more

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 🏗️ Build

Build for production (static export):

```bash
npm run build
```

This will create a static export in the `dist/` directory.

Preview production build:

```bash
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Home page
├── components/
│   └── ui/               # 47 shadcn/ui components
├── hooks/
│   └── use-toast.ts      # Toast notification hook
├── lib/
│   └── utils.ts          # Utility functions (cn, etc.)
├── .monstarx/
│   ├── config.json       # Template configuration
│   ├── ignore            # Protected files
│   └── prompt            # Template guidelines
├── components.json       # shadcn/ui configuration
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # TailwindCSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Available UI Components

This template includes 47 pre-installed shadcn/ui components:

**Layout & Navigation:**
- Accordion, Collapsible, Navigation Menu, Menubar, Tabs
- Resizable Panels, Scroll Area, Separator

**Forms & Inputs:**
- Input, Textarea, Select, Checkbox, Radio Group
- Switch, Slider, Label, OTP Input
- Form (with react-hook-form + Zod)

**Feedback:**
- Alert Dialog, Dialog, Toast (Sonner), Progress
- Hover Card, Tooltip, Popover

**Data Display:**
- Avatar, Badge, Card, Table
- Charts (Recharts integration)
- Calendar, Date Picker (react-day-picker)

**Interactive:**
- Button, Toggle, Toggle Group
- Dropdown Menu, Context Menu
- Command (cmdk), Drawer (Vaul)
- Carousel (Embla)

**Utilities:**
- Aspect Ratio, Slot

## 🎯 Usage Examples

### Using Components

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to MonstarX</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

### Form with Validation

```tsx
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const schema = z.object({
  email: z.string().email(),
})

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Input {...form.register("email")} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

### Dark Mode Toggle

```tsx
"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Toggle Theme
    </Button>
  )
}
```

## 🔧 Configuration

### Adding New shadcn/ui Components

```bash
npx shadcn-ui@latest add [component-name]
```

### Path Aliases

The template uses `@/` as a path alias:

```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
```

### TailwindCSS Customization

Edit `tailwind.config.ts` to customize:
- Colors and themes
- Typography
- Spacing
- Breakpoints
- Animations

### Next.js Configuration

The `next.config.js` is configured for:
- **Static Export** (`output: 'export'`)
- **Custom dist directory** (`distDir: 'dist'`)
- **Unoptimized images** (for static export)
- **ESLint disabled during builds**

## 🎨 Styling

### CSS Variables

Theme colors are defined as CSS variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

### Using the `cn` Utility

Merge Tailwind classes safely:

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", condition && "conditional-class")} />
```

## 📚 Key Libraries

- **Next.js 13.5.1** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5.2.2** - Type safety
- **TailwindCSS 3.3.3** - Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **react-hook-form** - Form state management
- **Zod** - Schema validation
- **next-themes** - Theme management
- **Recharts** - Charts and graphs
- **date-fns** - Date utilities
- **Sonner** - Toast notifications
- **cmdk** - Command menu
- **Vaul** - Drawer component
- **Embla Carousel** - Carousel component

## 🚀 Deployment

This template is configured for static export. Deploy to:

- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop `dist/` folder
- **GitHub Pages** - Push `dist/` to gh-pages branch
- **Any static host** - Upload `dist/` folder

## 📝 Template Guidelines

When building with this template:

1. **Server vs Client Components**
   - Use Server Components by default
   - Add `"use client"` only when using hooks (useState, useEffect, etc.)

2. **Component Library**
   - Use shadcn/ui components for consistency
   - Customize via Tailwind classes
   - Avoid installing additional UI libraries unless necessary

3. **Icons**
   - Use Lucide React for all icons
   - Import: `import { IconName } from "lucide-react"`

4. **Images**
   - Use Unsplash for stock photos (valid URLs only)
   - Images are unoptimized for static export

5. **Package Management**
   - Never write `package.json` directly
   - Use `npm install` commands to add packages

## 🤝 Contributing

This is a MonstarX template repository. For issues or suggestions, please contact the MonstarX team.

## 📄 License

MIT License - feel free to use this template for your projects.

---

**Built with MonstarX** 🚀
