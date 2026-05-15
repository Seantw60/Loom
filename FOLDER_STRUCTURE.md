# Loom Project Folder Structure

This document describes the organization of the Loom project codebase.

## Directory Map

```
Loom/
├── app/                         # Next.js App Router
│   ├── api/                     # API routes (one per entity type)
│   │   ├── characters/
│   │   ├── monsters/
│   │   ├── items/
│   │   ├── power-systems/
│   │   └── locations/
│   └── (pages)/                 # Page routes (layout, dashboard, editor, timeline)
│
├── components/                  # React components (all UI lives here)
│   ├── Continuum/               # Timeline ribbon system
│   │   ├── ContinuumTimeline.tsx
│   │   ├── RibbonRenderer.tsx
│   │   ├── TimelineNode.tsx
│   │   └── index.ts
│   │
│   ├── MillerColumn/            # Multi-pane navigation system
│   │   ├── MillerColumnPane.tsx
│   │   ├── PaneRoot.tsx
│   │   ├── PaneBranch.tsx
│   │   ├── PaneLeaf.tsx
│   │   ├── PaneWeave.tsx
│   │   └── index.ts
│   │
│   ├── FocusManuscript/         # Distraction-free editor
│   │   ├── EditorCanvas.tsx
│   │   ├── RibbonLock.tsx
│   │   ├── LinkingEngine.tsx
│   │   └── index.ts
│   │
│   ├── Shared/                  # Global/reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   └── index.ts
│   │
│   └── Layout.tsx               # Global layout wrapper
│
├── lib/                         # Utilities & helpers
│   ├── db/                      # Prisma queries and database utilities
│   │   ├── client.ts            # Prisma client instance
│   │   ├── models/
│   │   │   ├── character.ts
│   │   │   ├── monster.ts
│   │   │   ├── item.ts
│   │   │   └── project.ts
│   │   └── index.ts
│   │
│   ├── timeline/                # Continuum math (helical curves, transforms)
│   │   ├── helicalMath.ts
│   │   ├── ribbonCalculations.ts
│   │   └── index.ts
│   │
│   ├── linking/                 # Real-time link parsing and database updates
│   │   ├── linkParser.ts
│   │   ├── weaveAssembly.ts
│   │   └── index.ts
│   │
│   ├── paneState.ts             # Miller Column state management
│   └── constants.ts             # App-wide constants
│
├── hooks/                       # Custom React hooks
│   ├── useTimeline.ts           # Manage timeline state
│   ├── usePaneNavigation.ts     # Miller Column navigation
│   ├── useRealTimeLink.ts       # Monitor and react to [[link]] changes
│   └── index.ts
│
├── prisma/                      # Database schema and migrations
│   ├── schema.prisma            # Main database schema
│   └── migrations/              # Auto-generated migration files
│
├── styles/                      # Global styles and Tailwind config
│   ├── globals.css
│   └── tailwind.config.ts
│
├── public/                      # Static assets
│   ├── fonts/
│   ├── images/
│   └── icons/
│
├── .github/
│   └── copilot-instructions.md  # Copilot configuration
│
├── .env.example                 # Environment variable template
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
└── projectplan.md               # Project vision and specifications

```

## Key Principles

### Components Structure
- **All UI components go in `/components`**
- Organize by feature/pillar (Continuum, MillerColumn, FocusManuscript, Shared)
- Use barrel exports (`index.ts`) for clean imports
- Keep components ~200 lines; extract logic to hooks

### Library Organization
- `/lib/db` → All database queries and Prisma utilities
- `/lib/timeline` → Math and calculations for the Continuum
- `/lib/linking` → Real-time [[linking]] engine
- Use consistent export patterns for easy imports

### Hooks
- One hook file per major feature
- Reusable logic extracted from components
- Custom hooks follow `use*` naming convention

### API Routes
- One route file per entity type (characters, monsters, items, etc.)
- Standard error handling and response formats
- Type-safe responses using Prisma-generated types

## Development Workflow

**Import patterns:**
```typescript
// Components
import { ContinuumTimeline } from '@/components/Continuum';

// Hooks
import { useTimeline } from '@/hooks';

// Database
import { getCharacter } from '@/lib/db/models/character';

// Utilities
import { parseHelicalCurve } from '@/lib/timeline';
```

---

**See `.github/copilot-instructions.md` for detailed architecture, conventions, and boilerplate templates.**
