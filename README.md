# Loom: The Narrative Continuum

A professional-grade creative writing and world-building platform for managing multi-project narrative universes.

## Getting Started

### Prerequisites
- Node.js 18+ (recommended: 20+)
- npm or yarn
- PostgreSQL 14+ (for local development)
- Docker + Docker Compose (optional, for containerized PostgreSQL)

### Quick Start

1. **Clone and Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your database URL
   ```

3. **Initialize Prisma (optional for first time)**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting
- `npm run type-check` - Type-check without emitting
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Launch Prisma Studio

## Project Structure

See [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) for detailed directory organization.

### Key Directories
- `/app` - Next.js App Router pages and API routes
- `/components` - React components (Continuum, MillerColumn, FocusManuscript, Shared)
- `/lib` - Utilities, database queries, timeline math, linking engine
- `/hooks` - Custom React hooks
- `/prisma` - Database schema and migrations
- `/styles` - Tailwind CSS configuration and global styles

## Development Guidelines

See [.github/copilot-instructions.md](./.github/copilot-instructions.md) for:
- Architecture patterns
- Code style & conventions
- Boilerplate generation templates
- Animation requirements (Framer Motion-first)
- Type safety principles

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Frontend Framework | Next.js 16 + React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| ORM | Prisma 7 |
| Database | PostgreSQL |
| Components | Headless UI |

## Core Concepts

### The Sacred Timeline
The heart of Loom is **The Continuum**, a helical timeline with three states:
- **The Braid**: Collapsed view showing story destiny
- **The Unfurl**: Expanded ribbons revealing character/monster/item arcs
- **Nexus Points**: Vertical intersections showing where elements collide

### Miller Column Navigation
A four-pane deep-dive system (Root → Branch → Leaf → Weave) that replaces traditional modals, maintaining spatial context as users explore lore.

### Focus Manuscript
A distraction-free editor with real-time `[[linking]]` that populates the database and a Ribbon Lock feature to pin lore references while writing.

## Database Setup

### Using Docker Compose (Optional)
```bash
docker-compose up -d postgres
```

### Manual Setup
Create a PostgreSQL database and update your `.env.local`:
```
DATABASE_URL="postgresql://user:password@localhost:5432/loom_db"
```

### Run Migrations
```bash
npx prisma migrate dev --name init
```

## Contributing

1. Create a feature branch: `git checkout -b feature/feature-name`
2. Follow the code conventions in `.github/copilot-instructions.md`
3. Ensure animations use Framer Motion
4. Keep TypeScript strict (`noUnusedLocals`, `noFallthroughCasesInSwitch`, etc.)
5. Test locally before pushing: `npm run type-check && npm run lint`

## License

ISC

---

**For detailed architecture and development patterns, see:**
- [Project Plan](./projectplan.md)
- [Folder Structure](./FOLDER_STRUCTURE.md)
- [Copilot Instructions](./.github/copilot-instructions.md)
