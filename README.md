# Tree View Visualizer - Software Developer Intern Task

A high-performance, interactive tree-structure renderer built with **React Flow**. This project fulfills the technical requirements for the Software Developer Internship selection process, featuring dynamic layouts, automated parent-centering, and smooth subtree interactions.

## 🌟 Visual Preview
### click link to view : 

## 🚀 Key Features

### 1. Proper Tree Layout & Centering
- [cite_start]**Calculated Spacing**: Siblings are spaced according to a custom recursive algorithm to ensure zero node overlap.
- [cite_start]**Symmetrical Alignment**: Every parent node is mathematically centered above its entire group of children, regardless of depth[cite: 9, 23].

### 2. Intuitive Interactions
- [cite_start]**Expand/Collapse Subtrees**: Users can toggle any node with children to hide or show its descendants[cite: 11, 26].
- [cite_start]**Smooth Recalculation**: The layout shifts and animates fluidly when nodes are toggled to maintain visual clarity[cite: 12, 27].

### 3. Bonus Challenges Implemented
- [cite_start]**Node Metadata Sidebar**: A dedicated panel that appears on-click to display specific node IDs, labels, and system metadata[cite: 61].
- [cite_start]**Auto-Zoom & Pan**: The camera automatically pans and zooms (`fitView`) whenever the tree structure changes to keep the data visible[cite: 63].
- **Visual Design**: Replicates the dark-themed UI with blue root highlights and yellow connection markers found in the task specifications.

---

## 🛠️ Tech Stack
- **Frontend**: React.js
- [cite_start]**Library**: React Flow (Nodes, Edges, and Viewport management) [cite: 5]
- **Styling**: Custom CSS3 (Flexbox, Transitions, and Animations)

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

1. **Clone the Repository**
   ```bash
   git clone <your-repository-link>
   cd tree-view-visualizer
## 🧩 Core Logic & Constraints

To meet the specific requirements of the internship task, the following logic was implemented:

- [cite_start]**Hierarchy Depth**: The tree is pre-configured to handle 3-6 levels of depth as specified[cite: 54].
- [cite_start]**Parent Centering**: Parent nodes are positioned at the average X-coordinate of their children's subtree boundaries, ensuring they are perfectly centered above the entire group[cite: 9, 23, 25].
- [cite_start]**No Overlap Guarantee**: A recursive width-calculation algorithm determines the total horizontal footprint of each subtree before positioning, preventing sibling collisions[cite: 4, 8].
- [cite_start]**Client-Side Rendering**: The visualizer is fully functional on the client side with no external backend dependencies[cite: 55].

## 🛠️ Bonus Features Included

Beyond the core requirements, this project implements several advanced features to enhance user experience:
- [cite_start]**Hover Highlighting**: Visual feedback when hovering over specific nodes or branches[cite: 59].
- [cite_start]**Node Metadata**: Interactive display of node details upon selection[cite: 61].
- [cite_start]**Auto-Zoom/Pan**: Dynamic viewport management to keep large trees within the field of view[cite: 63].

## 📝 Setup for Reviewers

1. **Install Dependencies**
   ```bash
   npm install
