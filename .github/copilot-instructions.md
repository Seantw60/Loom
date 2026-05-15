---
description: "Loom project guidance: understands Sacred Timeline architecture, Miller Column multi-pane patterns, Framer Motion animation priorities, and Prisma data model. Use when implementing features, generating boilerplate, enforcing code conventions, or building components for the helical timeline UI. Prioritize visual delight and animations—this must impress writers and UX designers."
---

# Copilot Instructions for Project Loom

This file configures GitHub Copilot to understand the architecture, enforce development conventions, and generate high-quality boilerplate for **Loom**, a spatio-temporal IDE for world-builders and fiction architects.

---

## 1. Project Vision & Core Metaphor

**Loom** is a professional-grade creative writing and world-building platform that manages narrative complexity through spatial visualization and animation-driven interactions.

### The Sacred Timeline
The core metaphor is **The Continuum**, a helical timeline powered by Framer Motion:
- **The Braid** (collapsed state): A single, twisted line of color-coded threads representing story destiny
- **The Unfurl** (expanded state): The rope dynamically untwists into parallel horizontal Ribbons (the Loom)
- **Nexus Points**: Vertical alignment across ribbons reveals where elements (characters, monsters, power systems, plot) collide

### Visual Philosophy
- **Ghost UI**: Prioritize content and spatial clarity over heavy chrome
- **Animations First**: Every interaction should feel intentional and delightful—this project must impress writers and UX designers
- **Spatial Consistency**: Users maintain a mental map through physical transitions (slides, zooms), never feeling lost

---

## 2. Architecture Patterns for Copilot

### The Three Core Pillars

#### A. The Continuum (Helical Timeline)
- **Purpose**: Main navigation and story visualization
- **Technology**: Framer Motion, Canvas/SVG for ribbon rendering, D3 or custom math for helical curves
- **Interactions**: Click to select timeline node → triggers pane slide. Scrub timeline → ribbons unfurl smoothly
- **State**: Timeline position (0–1), selected node, active ribbon, viewport transform
- **Key Files**: `/components/Continuum/`, `/lib/timeline/`, `/hooks/useTimeline.ts`

#### B. Miller Column (Multi-Pane Navigation)
- **Purpose**: Explore lore hierarchy without modals; four-pane deep-dive system
- **Pattern**: Root (global structure) → Branch (category) → Leaf (specific entry) → Weave (related mentions)
- **Technology**: Framer Motion for slide-in animations, React Context for pane state
- **Interactions**: Select item → next pane slides in from right; breadcrumb navigation to pop panes
- **Key Files**: `/components/MillerColumn/`, `/lib/paneState.ts`, `/hooks/usePaneNavigation.ts`
- **No Modals**: All interactions use pane slides; preserve spatial context

#### C. Focus Manuscript (Distraction-Free Editor)
- **Purpose**: Writing environment with real-time world-building integration
- **Features**: 
  - Bi-directional `[[linking]]` that updates Prisma database in real-time
  - Ribbon Lock: pin a lore ribbon (e.g., "Power System Rules") to top of editor
  - Word count, reading time, scene markers
- **Technology**: Monaco Editor or TipTap, real-time database reactions, Framer Motion for ribbon animations
- **Key Files**: `/components/FocusManuscript/`, `/lib/linking/`, `/hooks/useRealTimeLink.ts`

### Data Model (Prisma-Driven)
```
Project (many Chapters, many Lore entries)
  ├─ Chapter (text content, many Characters/Items linked via junction)
  ├─ Lore (polymorphic: Character, Monster, Item, PowerSystem, Location)
  │   ├─ Character (name, abilities[], items[])
  │   ├─ Monster (name, habitat, abilities[])
  │   ├─ Item (name, owner, properties[])
  │   └─ PowerSystem (name, rules, channelers[])
  └─ Chapter_Lore (junction for many-to-many linking)
```

**Key Principle**: Every entity is a first-class database citizen. No hierarchical nesting—use Prisma relations instead.

---

## 3. Code Style & Conventions

### Component Structure
- **Functional components only**: Use React functional components with TypeScript
- **Props interface**: Export a `Props` interface for each component
- **File naming**: `[Feature][Component].tsx` (e.g., `ContinuumTimeline.tsx`, `MillerColumnPane.tsx`)
- **Max size**: Keep components ~200 lines; extract complex logic to hooks or utility functions
- **Barrel exports**: Use `index.ts` in component folders for clean imports

```typescript
// Example: components/Continuum/ContinuumTimeline.tsx
interface Props {
  projectId: string;
  onNodeSelect: (nodeId: string) => void;
}

export const ContinuumTimeline: React.FC<Props> = ({ projectId, onNodeSelect }) => {
  // Component logic
};
```

### Styling (Tailwind CSS 4)
- Use Tailwind utility classes as primary styling approach
- Define custom design tokens in `tailwind.config.ts` (colors, spacing, animation durations)
- Never use inline styles unless for dynamic Framer Motion values
- Responsive design: mobile-first, use `md:`, `lg:`, `xl:` breakpoints

### **Animation Requirement: Framer Motion First**
- **Every interactive element must have a Framer Motion transition**
- Never use CSS-only transitions for UI state changes (hover, click, load)
- Prioritize smooth 60fps interactions; use `layout` prop for shared layout animations
- Common patterns:
  - Pane slides: `animate={{ x: 0 }} initial={{ x: 300 }}`
  - Ribbon unfurl: Stagger children with `transition={{ staggerChildren: 0.1 }}`
  - Hover states: Use `whileHover` and `whileTap` for tactile feedback

```typescript
// Example: Smooth pane slide-in
<motion.div
  initial={{ x: 300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -300, opacity: 0 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
>
  {/* Pane content */}
</motion.div>
```

### Database & Prisma
- **Type safety first**: Use generated Prisma types; never use `any` unless absolutely unavoidable
- **API routes**: Create one Next.js API route per Lore type (e.g., `/api/characters`, `/api/monsters`)
- **Query optimization**: Use Prisma `include` to fetch relations; avoid N+1 queries
- **Real-time updates**: Use Prisma's `onUpdate` hooks or websocket patterns for `[[linking]]` reactions

```typescript
// Example: Fetch character with relations
const character = await prisma.character.findUnique({
  where: { id: characterId },
  include: { abilities: true, items: true, chapters: true },
});
```

### File Organization
```
/app                    # Next.js App Router
  /api                  # API routes (one per entity type)
  /(pages)              # Page routes
/components             # React components
  /Continuum            # Timeline ribbon system
  /MillerColumn         # Pane navigation
  /FocusManuscript      # Editor
  /Shared               # Global components (buttons, cards, modals)
/lib                    # Utilities & helpers
  /db                   # Prisma queries, database utilities
  /timeline             # Continuum math (helical curves, transforms)
  /linking              # Real-time link parsing and database updates
  /paneState.ts         # Miller Column state management
/hooks                  # Custom React hooks
  /useTimeline.ts       # Manage timeline state
  /usePaneNavigation.ts # Miller Column navigation
  /useRealTimeLink.ts   # Monitor and react to [[link]] changes
/prisma                 # Database schema and migrations
/styles                 # Global Tailwind config, design tokens
```

---

## 4. Boilerplate Generation Templates

### When Copilot generates new code, follow these templates:

#### A. New Lore Type (Character, Monster, Item, etc.)

**1. Prisma Model** (`/prisma/schema.prisma`)
```prisma
model Character {
  id        String    @id @default(cuid())
  projectId String
  project   Project   @relation(fields: [projectId], references: [id], onDelete: Cascade)
  
  name      String
  description String?
  archetype String?   // Hero, Mentor, Villain, etc.
  
  abilities Ability[]
  items     Item[]
  chapters  Chapter[] @relation("ChapterCharacters")
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

**2. TypeScript Interface** (`/lib/db/models/character.ts`)
```typescript
import { Character as PrismaCharacter } from "@prisma/client";

export interface Character extends PrismaCharacter {
  abilities?: Ability[];
  items?: Item[];
}
```

**3. API Route** (`/app/api/characters/route.ts`)
```typescript
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");
  
  const characters = await prisma.character.findMany({
    where: { projectId },
    include: { abilities: true, items: true },
  });
  
  return Response.json(characters);
}

export async function POST(req: Request) {
  const body = await req.json();
  // Validate, create, return new character
}
```

#### B. New Editor Pane (for Miller Column)

**Component Template** (`/components/MillerColumn/[PaneName].tsx`)
```typescript
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

export const [PaneName]: React.FC<Props> = ({ isOpen, onClose, data }) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: isOpen ? 0 : 300, opacity: isOpen ? 1 : 0 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-md bg-white shadow-lg"
    >
      {/* Pane header with close button */}
      {/* Pane content: form, details, links */}
    </motion.div>
  );
};
```

#### C. Database Migration

When generating a Prisma schema change:
1. Update `/prisma/schema.prisma`
2. Run `npx prisma migrate dev --name [feature_name]`
3. Auto-generated migration file goes to `/prisma/migrations/[timestamp]_[feature_name]/`

---

## 5. Specific Behavior Guidance

### Animation & Visual Polish
- **Target**: Make Loom look impressive to writers and UX designers
- **Every hover state** should have a Framer Motion transition (scale, opacity, color shift)
- **Ribbon unfurl**: Use staggered animations so ribbons reveal sequentially
- **Timeline scrubbing**: Should feel responsive and liquid; use `useMotionValueEvent` for real-time feedback
- **Loading states**: Animated skeleton screens, not static spinners

### Performance & Responsiveness
- **Sub-millisecond targeting**: Optimize animations to hit 60fps
- **Lazy load panes**: Don't render all Miller Column panes upfront; conditionally render based on `isOpen`
- **Debounce timeline scrubbing**: Prevent excessive re-renders during drag
- **Memoize ribbon renders**: Use `React.memo` for ribbon components if many are on-screen

### Real-Time Linking
- **Trigger**: User types `[[CharacterName]]` in Focus Manuscript
- **Behavior**: 
  - Debounce parsing by 300ms to avoid excessive queries
  - Query Prisma for matching Lore entries
  - Create junction record in `Chapter_Lore` table on link creation
  - Highlight `[[link]]` with subtle Framer Motion bounce or color shift
- **Bidirectional**: "Weave" pane in Miller Column shows all chapters linked to a Lore entry

### Type Safety Principles
- **No `any` types**: Use `unknown` and narrow with type guards if necessary
- **Prisma types**: Import from `@prisma/client` for all database entities
- **Component Props**: Always define explicit `Props` interface
- **API responses**: Use Zod or similar for runtime validation of external data

### Code Quality
- **Comment complex logic**: Especially timeline math, Prisma queries, animation calculations
- **Error handling**: All API routes should return consistent error format with status codes
- **Testing mindset**: Write components as if they'll be unit-tested; keep concerns separated

---

## 6. Common Patterns & Examples

### Using `useTimeline` Hook
```typescript
const { position, selectedNode, isUnfurled, handleSelect } = useTimeline(projectId);
```

### Creating a Linked Lore Entry from Editor
```typescript
// When user types [[CharacterName]]
const result = await fetch("/api/characters/search", { 
  query: "CharacterName" 
});
// Auto-create junction link
await fetch("/api/chapter-lore/link", { 
  chapterId, 
  loreId: result.id 
});
```

### Building a Ribbon Component
```typescript
<motion.div
  layoutId={`ribbon-${ribbonId}`}
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
  {nodes.map((node, i) => (
    <motion.button
      key={node.id}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleSelect(node)}
    >
      {node.name}
    </motion.button>
  ))}
</motion.div>
```

---

## 7. Quick Reference: Tech Stack

| Component | Technology | Why |
|-----------|-----------|-----|
| **Frontend** | Next.js 16 + React 19 | Server components, streaming, performance |
| **Language** | TypeScript 5 | Type safety for complex data relations |
| **Styling** | Tailwind CSS 4 | Rapid prototyping, design token consistency |
| **Animations** | Framer Motion | GPU-accelerated, 60fps, intuitive API |
| **Components** | Headless UI + React Aria | Accessible, unstyled foundation |
| **ORM** | Prisma 7 | Type-safe queries, auto-migrations, DX |
| **Database** | PostgreSQL | Relational integrity for many-to-many links |
| **Infrastructure** | Docker + Docker Compose | Local dev parity, easy team onboarding |

---

## 8. When to Ask for Clarification

When implementing Loom features, Copilot should ask for clarification if:
- The animation duration or easing curve isn't specified (default: 0.35s ease-out)
- Whether a new Lore type should appear in all four Miller Column panes or a subset
- If a feature should trigger a real-time database update or be batched on save
- The responsive breakpoint strategy for a new component

---

## Summary

**In essence**: Build Loom as a visually impressive, animation-first, spatially-consistent world-building IDE. Every component, from the Continuum timeline to the Focus Manuscript editor, should prioritize smooth Framer Motion interactions and type-safe Prisma data flows. Treat animations as a core feature, not an afterthought—writers and UX designers should be impressed.
