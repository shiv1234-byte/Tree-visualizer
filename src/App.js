import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
  useReactFlow,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';

// Spacing Configuration [cite: 8]
const NODE_W = 160;
const NODE_H = 60;
const LEVEL_GAP = 120; 
const SIBLING_GAP = 30;

// Hierarchical Data (5 Levels) [cite: 54]
const initialTreeData = {
  id: 'root', label: 'Root System', meta: 'Core Entry Point',
  children: [
    {
      id: 'A', label: 'Module A', meta: 'User Authentication',
      children: [
        { 
          id: 'A1', label: 'Service A1', meta: 'Login Handler',
          children: [
            { id: 'A1-1', label: 'Task A1.1', meta: 'DB Query', children: [{ id: 'A1-1-1', label: 'Log A1.1.1', meta: 'Success Audit' }] },
            { id: 'A1-2', label: 'Task A1.2', meta: 'JWT Sign' }
          ]
        },
        { id: 'A2', label: 'Service A2', meta: 'Register Handler', children: [{ id: 'A2-1', label: 'Task A2.1', meta: 'Email Verification' }] },
      ],
    },
    {
      id: 'B', label: 'Module B', meta: 'Data Processing',
      children: [
        { id: 'B1', label: 'Service B1', meta: 'Parser', children: [{ id: 'B1-1', label: 'Task B1.1', meta: 'CSV Reader' }] },
        { id: 'B2', label: 'Service B2', meta: 'Exporter', children: [
          { id: 'B2-1', label: 'Task B2.1', meta: 'PDF Generator' }, 
          { id: 'B2-2', label: 'Task B2.2', meta: 'Excel Generator' }
        ] },
      ],
    },
  ],
};

const TreeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [expandedNodes, setExpandedNodes] = useState(new Set(['root', 'A', 'B']));
  const [selectedNode, setSelectedNode] = useState(null); // Metadata Sidebar State 
  const { fitView } = useReactFlow();

  // Recursive width calculation for perfect centering [cite: 9, 23, 25]
  const getSubtreeWidth = useCallback((node) => {
    if (!expandedNodes.has(node.id) || !node.children?.length) return NODE_W;
    const childrenWidth = node.children.reduce((acc, child) => acc + getSubtreeWidth(child), 0);
    return Math.max(NODE_W, childrenWidth + (node.children.length - 1) * SIBLING_GAP);
  }, [expandedNodes]);

  const calculateLayout = useCallback(() => {
    const newNodes = [];
    const newEdges = [];

    const layout = (node, centerX, y, parentId = null) => {
      const isExpanded = expandedNodes.has(node.id);
      const hasChildren = node.children?.length > 0;

      newNodes.push({
        id: node.id,
        data: { label: node.label, meta: node.meta },
        position: { x: centerX - NODE_W / 2, y },
        className: `custom-node ${node.id === 'root' ? 'root-node' : ''} ${hasChildren ? 'branch' : 'leaf'}`,
        style: { width: NODE_W, height: NODE_H },
      });

      if (parentId) {
        newEdges.push({
          id: `e-${parentId}-${node.id}`,
          source: parentId,
          target: node.id,
          type: ConnectionLineType.SmoothStep,
          animated: true,
        });
      }

      if (isExpanded && hasChildren) {
        const totalW = getSubtreeWidth(node);
        let currentX = centerX - totalW / 2;

        node.children.forEach((child) => {
          const childW = getSubtreeWidth(child);
          const childCenterX = currentX + childW / 2;
          layout(child, childCenterX, y + NODE_H + LEVEL_GAP, node.id);
          currentX += childW + SIBLING_GAP;
        });
      }
    };

    layout(initialTreeData, 600, 40);
    setNodes(newNodes);
    setEdges(newEdges);
  }, [expandedNodes, getSubtreeWidth, setNodes, setEdges]);

  useEffect(() => {
    calculateLayout();
    setTimeout(() => fitView({ duration: 800, padding: 0.3 }), 100); // Auto-zoom [cite: 63]
  }, [expandedNodes, calculateLayout, fitView]);

  const onNodeClick = (_, node) => {
    setSelectedNode(node); // Open Sidebar 
    setExpandedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(node.id)) next.delete(node.id);
      else next.add(node.id);
      return next;
    });
  };

  return (
    <div className="flow-wrapper">
      <div className="task-header">
        <h3>Software Developer Intern Task</h3>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        zoomOnDoubleClick={false}
      >
        <Background color="#cbd5e1" gap={20} />
      </ReactFlow>

      {/* Metadata Sidebar Bonus Challenge  */}
      {selectedNode && (
        <div className="metadata-sidebar">
          <button className="close-btn" onClick={() => setSelectedNode(null)}>×</button>
          <h4>Node Metadata</h4>
          <hr />
          <div className="meta-item"><strong>ID:</strong> {selectedNode.id}</div>
          <div className="meta-item"><strong>Label:</strong> {selectedNode.data.label}</div>
          <div className="meta-item"><strong>Info:</strong> {selectedNode.data.meta}</div>
          <div className="meta-item"><strong>Status:</strong> {selectedNode.className.includes('leaf') ? 'Leaf Node' : 'Branch Node'}</div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ReactFlowProvider>
      <TreeFlow />
    </ReactFlowProvider>
  );
}