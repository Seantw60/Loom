# Project Loom: The Narrative Continuum
**Subtitle:** *A Spatio-Temporal IDE for World-Builders and Fiction Architects.*

## 1. Executive Summary
**Loom** is a professional-grade creative writing and world-building platform designed to manage the high-density complexity of multi-project narrative universes. Unlike traditional folder-based editors or node-based knowledge graphs, **Loom** introduces a unique **Helical Navigation System**. Inspired by the concept of the "Sacred Timeline," it visualizes the story as a braided rope of interconnected concepts—Characters, Monsters, Power Systems, and Plot—that dynamically unravels to reveal the "Loom" of the narrative.

---

## 2. The Core Metaphor: The Sacred Timeline
At the heart of the application is **The Continuum**, a visually dominant, helical timeline powered by **Framer Motion**.

- **The Braid:** In its collapsed state, the project exists as a single, twisted line of color-coded threads. This represents the "destiny" of the story.
- **The Unfurl:** As the user scrubs through the timeline, the rope dynamically untwists, fanning out into parallel horizontal "Ribbons" (the Loom).
- **Lines of Intent:** Each ribbon represents a specific Prisma-backed data model (e.g., a Character's arc, a Monster's habitat, or a Power System's evolution). Vertical alignment across these ribbons reveals the "Nexus Points" where elements collide.

---

## 3. High-Fidelity UI/UX Architecture
Loom utilizes a **Ghost UI** philosophy—prioritizing content and spatial clarity over heavy chrome.

### A. The Miller Column Depth System
Inspired by high-end asset managers, Loom eschews traditional modals. When a user selects a "Node" on a timeline ribbon (e.g., a specific Character), the interface slides into a **Multi-Dimensional Pane View**:
- **Pane 1 (The Root):** The Global Project Structure.
- **Pane 2 (The Branch):** Categorical Lore (e.g., The Pantheon of Monsters).
- **Pane 3 (The Leaf):** The specific Lore Entry (The Prisma data for a specific beast).
- **Pane 4 (The Weave):** A "Related Mentions" pane showing every chapter and character currently linked to this entry via many-to-many database relations.

### B. The Focus Manuscript
The writing environment is a "distraction-free" canvas with professional-grade affordances:
- **Bi-directional Reference:** Inline `[[linking]]` that populates the Prisma database in real-time.
- **The Ribbon Lock:** Writers can "pin" a specific lore ribbon (like the "Power System Rules") to the top of the editor, ensuring consistent world-building logic during the drafting process.

---

## 4. Technical Stack
To ensure sub-millisecond responsiveness and type-safety across complex lore relations:

| Component | Technology |
| :--- | :--- |
| **Frontend Framework** | Next.js 16 (App Router) + React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Interactions** | Framer Motion |
| **Components** | Headless UI + React Aria |
| **ORM** | Prisma 7 |
| **Database** | PostgreSQL |
| **Security** | Bcrypt |
| **Infrastructure** | Docker + Docker Compose |

---

## 5. Design Guiding Principles
- **Spatial Consistency:** Users should never feel "lost." Transitions are physical slides or zooms, maintaining a mental map of the project.
- **Density vs. Clarity:** High-level data is hidden behind "The Braid" until needed. The UI only reveals complexity at the user's request (The Unfurl).
- **The "Architect's" Workflow:** Built for the writer who builds systems, not just sentences. Every Item, Monster, and Ability is a first-class citizen in the database.

---

## 6. Data Schema (Prisma)
The database is structured to support deep interconnectivity:

```prisma
// Core Models
model Project {
  id        String    @id @default(cuid())
  title     String
  chapters  Chapter[]
  lore      Lore[]    // Characters, Monsters, Items, etc.
}

model Chapter {
  id         String      @id @default(cuid())
  order      Int
  content    String?
  characters Character[] // Linked via Junction Table
}

model Character {
  id         String    @id @default(cuid())
  name       String
  abilities  Ability[]
  items      Item[]
}