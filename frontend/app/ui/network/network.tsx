import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import { getGraphData } from "@/services/graphService";
import type { ForceGraphMethods } from "react-force-graph-2d";

enum nodeType {
  PROJECT = "project",
  USER = "user",
  SPECIALIZATION = "specialization",
}

interface GraphNode {
  id: string;
  name: string;
  type: nodeType;
  image?: string;
  _img?: HTMLImageElement;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number;
  fy?: number;
}

interface GraphLink {
  source: string;
  target: string;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

const ForceGraph2D = dynamic(
  () => import("react-force-graph-2d").then((mod) => mod.default),
  { ssr: false }
);

const GraphComponent: React.FC<{ projectId: number }> = ({ projectId }) => {
  const fgRef = useRef<any>(undefined);
  const [graphData, setGraphData] = useState<GraphData>({
    nodes: [],
    links: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGraphData(projectId);
        setGraphData(data as GraphData);
      } catch (error) {
        console.error("Error fetching graph data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [projectId]);

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.d3Force("link")?.distance(250);
    }
  }, []);

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        enableNodeDrag={true}
        nodeRelSize={10}
        linkDirectionalArrowLength={0}
        linkDirectionalArrowRelPos={1}
        enableZoomInteraction={false}
        onNodeDragEnd={(node: any) =>
          console.log("Node dragged:", node as GraphNode)
        }
        nodeColor={(node: any) => (node as GraphNode).color || "black"}
        nodeCanvasObject={(
          node: any,
          ctx: CanvasRenderingContext2D,
          globalScale: number
        ) => {
          const graphNode = node as GraphNode;
          if (
            typeof graphNode.x !== "number" ||
            typeof graphNode.y !== "number"
          )
            return;

          const width = 48;
          const height = 64;
          const imageHeightRatio = 0.6;
          const imageHeight = height * imageHeightRatio;
          const labelHeight = height - imageHeight;
          const radius = 6;

          const hasImage = !!graphNode.image;

          const drawRoundedRect = (
            x: number,
            y: number,
            w: number,
            h: number,
            r: number
          ) => {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + r);
            ctx.lineTo(x + w, y + h - r);
            ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            ctx.lineTo(x + r, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
          };

          if (graphNode.type === nodeType.USER) {
            const size = 24;
            const half = size / 2;

            if (hasImage) {
              if (!graphNode._img) {
                const img = new Image();
                img.src = graphNode.image!;
                img.onload = () => {
                  graphNode._img = img;
                };
                return;
              }

              ctx.save();
              ctx.beginPath();
              ctx.arc(graphNode.x, graphNode.y, half, 0, 2 * Math.PI);
              ctx.clip();
              ctx.drawImage(
                graphNode._img,
                graphNode.x - half,
                graphNode.y - half,
                size,
                size
              );
              ctx.restore();
            } else {
              ctx.beginPath();
              ctx.arc(graphNode.x, graphNode.y, half, 0, 2 * Math.PI);
              ctx.fillStyle = "gray";
              ctx.fill();
            }

            const label = graphNode.name;
            const fontSize = 14 / globalScale;
            ctx.font = `bold ${fontSize}px Inter`;
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillText(label, graphNode.x, graphNode.y + half + 4);
            return;
          }

          const x = graphNode.x - width / 2;
          const y = graphNode.y - height / 2;

          ctx.save();
          drawRoundedRect(x, y, width, height, radius);
          ctx.clip();

          if (hasImage) {
            if (!graphNode._img) {
              const img = new Image();
              img.src = graphNode.image!;
              img.onload = () => {
                graphNode._img = img;
              };
              ctx.restore();
              return;
            }
            ctx.drawImage(graphNode._img, x, y, width, imageHeight);
          } else {
            ctx.fillStyle = "#ccc";
            ctx.fillRect(x, y, width, imageHeight);
          }

          ctx.fillStyle = "rgba(255,255,255,0.5)";
          ctx.fillRect(x, y + imageHeight, width, labelHeight);

          ctx.restore();

          const fontSize = 13 / globalScale;
          ctx.font = `600 ${fontSize}px Inter`;
          ctx.fillStyle = "black";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(
            graphNode.name,
            graphNode.x,
            y + imageHeight + labelHeight / 2
          );
        }}
        nodePointerAreaPaint={(
          node: any,
          color: string,
          ctx: CanvasRenderingContext2D
        ) => {
          const graphNode = node as GraphNode;
          if (
            typeof graphNode.x !== "number" ||
            typeof graphNode.y !== "number"
          )
            return;

          const width = 48;
          const height = 64;
          const size = 24;
          const radius = 6;

          ctx.fillStyle = color;

          if (graphNode.type === nodeType.USER) {
            ctx.beginPath();
            ctx.arc(graphNode.x, graphNode.y, size / 2, 0, 2 * Math.PI);
            ctx.fill();
          } else {
            const x = graphNode.x - width / 2;
            const y = graphNode.y - height / 2;

            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(
              x + width,
              y + height,
              x + width - radius,
              y + height
            );
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
            ctx.fill();
          }
        }}
      />
    </div>
  );
};

export default GraphComponent;
