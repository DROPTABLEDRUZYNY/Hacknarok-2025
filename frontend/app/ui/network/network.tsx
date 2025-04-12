import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import ForceGraph2D, {
  ForceGraphMethods,
  NodeObject,
  LinkObject,
} from "react-force-graph-2d";

enum nodeType {
  PROJECT = "project",
  USER = "user",
}

// Расширяем интерфейс Node от NodeObject, чтобы включить поля, необходимые библиотеке (например, x, y)
interface Node extends NodeObject {
  id: string;
  name: string;
  type: nodeType;
  color?: string;
  image?: string;
  // Добавляем кастомное поле для кэширования изображения
  _img?: HTMLImageElement;
}

// Если требуется, можно аналогично расширить Link от LinkObject
interface Link extends LinkObject {
  source: string;
  target: string;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

// Пример данных графа
const data: GraphData = {
  nodes: [
    {
      id: "node1",
      type: nodeType.USER,
      name: "Yehor Kharchenko",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_300/https://www.corporatephotographerslondon.com/wp-content/uploads/2021/07/LinkedIn_profile_photo_sample_smiling-300x300.jpg",
    },
    {
      id: "node2",
      type: nodeType.USER,
      name: "Artur Niemiec",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_300/https://www.corporatephotographerslondon.com/wp-content/uploads/2021/07/LinkedIn_profile_photo_sample_smiling-300x300.jpg",
    },
    {
      id: "node3",
      type: nodeType.PROJECT,
      name: "usos for schools",
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_300/https://www.corporatephotographerslondon.com/wp-content/uploads/2021/07/LinkedIn_profile_photo_sample_smiling-300x300.jpg",
    },
  ],
  links: [
    { source: "node1", target: "node2" },
    { source: "node1", target: "node3" },
  ],
};

const GraphComponent: React.FC = () => {
  // Используем useRef без начального значения (undefined) и указываем тип, ожидаемый библиотекой
  const fgRef =
    useRef<ForceGraphMethods<NodeObject<Node>, LinkObject<Node, Link>>>(
      undefined
    );

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.d3Force("link")?.distance(50);
    }
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <ForceGraph2D
        ref={fgRef}
        graphData={data}
        enableNodeDrag={true}
        nodeRelSize={10}
        linkDirectionalArrowLength={0}
        linkDirectionalArrowRelPos={1}
        enableZoomInteraction={false}
        onNodeDragEnd={(node) => console.log("Node dragged:", node)}
        nodeColor={(node) => "black"}
        nodeCanvasObject={(node, ctx, globalScale) => {
          if (typeof node.x !== "number" || typeof node.y !== "number") return;

          const width = 48;
          const height = 64;
          const imageHeightRatio = 0.6; // 60% картинки, 40% подпись
          const imageHeight = height * imageHeightRatio;
          const labelHeight = height - imageHeight;
          const radius = 6;

          const hasImage = !!node.image;

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

          if (node.type === nodeType.USER) {
            const size = 24;
            const half = size / 2;

            if (hasImage) {
              if (!node._img) {
                const img = new Image();
                img.src = node.image!;
                img.onload = () => {
                  node._img = img;
                };
                return;
              }

              ctx.save();
              ctx.beginPath();
              ctx.arc(node.x, node.y, half, 0, 2 * Math.PI);
              ctx.clip();
              ctx.drawImage(
                node._img,
                node.x - half,
                node.y - half,
                size,
                size
              );
              ctx.restore();
            } else {
              ctx.beginPath();
              ctx.arc(node.x, node.y, half, 0, 2 * Math.PI);
              ctx.fillStyle = "gray";
              ctx.fill();
            }

            // Подпись под узлом USER
            const label = node.name;
            const fontSize = 14 / globalScale;
            ctx.font = `bold ${fontSize}px Inter`;
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillText(label, node.x, node.y + half + 4);
            return;
          }

          // Отрисовка PROJECT
          const x = node.x - width / 2;
          const y = node.y - height / 2;

          ctx.save();
          drawRoundedRect(x, y, width, height, radius);
          ctx.clip();

          if (hasImage) {
            if (!node._img) {
              const img = new Image();
              img.src = node.image!;
              img.onload = () => {
                node._img = img;
              };
              ctx.restore();
              return;
            }
            ctx.drawImage(node._img, x, y, width, imageHeight);
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
          ctx.fillText(node.name, node.x, y + imageHeight + labelHeight / 2);
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          if (typeof node.x !== "number" || typeof node.y !== "number") return;

          const width = 48;
          const height = 64;
          const size = 24;
          const radius = 6;

          ctx.fillStyle = color;

          if (node.type === nodeType.USER) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, size / 2, 0, 2 * Math.PI);
            ctx.fill();
          } else if (node.type === nodeType.PROJECT) {
            const x = node.x - width / 2;
            const y = node.y - height / 2;

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
