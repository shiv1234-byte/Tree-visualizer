# Tree View Visualizer - Software Developer Intern Task

A high-performance, interactive tree-structure renderer built with **React Flow**. This project fulfills the technical requirements for the Software Developer Internship selection process, featuring dynamic layouts, automated parent-centering, and smooth subtree interactions.

## 🌟 Visual Preview
### click link to view :  https://shiv1234-byte.github.io/Tree-visualizer/

<img width="1902" height="880" alt="image" src="https://github.com/user-attachments/assets/d202ba0b-740d-4b18-aef2-0e04f9b1a5ca" />

## 🚀 Key Features

### 1. Proper Tree Layout & Centering
-**Calculated Spacing**: Siblings are spaced according to a custom recursive algorithm to ensure zero node overlap.
- **Symmetrical Alignment**: Every parent node is mathematically centered above its entire group of children, regardless of depth.

### 2. Intuitive Interactions
- **Expand/Collapse Subtrees**: Users can toggle any node with children to hide or show its descendants.
- **Smooth Recalculation**: The layout shifts and animates fluidly when nodes are toggled to maintain visual clarity.

### 3. Bonus Challenges Implemented
- **Node Metadata Sidebar**: A dedicated panel that appears on-click to display specific node IDs, labels, and system metadata.
- **Auto-Zoom & Pan**: The camera automatically pans and zooms (`fitView`) whenever the tree structure changes to keep the data visible.
- **Visual Design**: Replicates the dark-themed UI with blue root highlights and yellow connection markers found in the task specifications.

---

## 🛠️ Tech Stack
- **Frontend**: React.js
- **Library**: React Flow (Nodes, Edges, and Viewport management) 
- **Styling**: Custom CSS3 (Flexbox, Transitions, and Animations)

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

1. **Clone the Repository**
   ```bash
 `git clone https://github.com/shiv1234-byte/Tree-visualizer.git`
   cd tree-view-visualizer
## 🧩 Core Logic & Constraints

To meet the specific requirements of the internship task, the following logic was implemented:

-**Hierarchy Depth**: The tree is pre-configured to handle 3-6 levels of depth as specified.
-**Parent Centering**: Parent nodes are positioned at the average X-coordinate of their children's subtree boundaries, ensuring they are perfectly centered above the entire group.
- **No Overlap Guarantee**: A recursive width-calculation algorithm determines the total horizontal footprint of each subtree before positioning, preventing sibling collisions.
- **Client-Side Rendering**: The visualizer is fully functional on the client side with no external backend dependencies.

## 🛠️ Bonus Features Included

Beyond the core requirements, this project implements several advanced features to enhance user experience:
- **Hover Highlighting**: Visual feedback when hovering over specific nodes or branches.
- **Node Metadata**: Interactive display of node details upon selection.
- **Auto-Zoom/Pan**: Dynamic viewport management to keep large trees within the field of view.

## 📝 Setup for Reviewers

1. **Install Dependencies**
   ```bash
   npm install
