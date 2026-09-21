import { useEffect, useRef, useState } from "react";

export function AirHockeyTable({ compact = false }: { compact?: boolean }) {
  const tableRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 50, y: 72 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = tableRef.current;
    if (!element) return;
    const onPointerMove = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect();
      const x = Math.max(13, Math.min(87, ((event.clientX - bounds.left) / bounds.width) * 100));
      const y = Math.max(55, Math.min(88, ((event.clientY - bounds.top) / bounds.height) * 100));
      setPointer({ x, y });
      setActive(true);
    };
    const onLeave = () => setActive(false);
    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerleave", onLeave);
    return () => {
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={tableRef}
      className={`hockey-table ${compact ? "hockey-table--compact" : ""}`}
      aria-label="Interactive visualization of the air hockey game"
    >
      <div className="table-grid" />
      <div className="center-line" />
      <div className="center-circle" />
      <div className="goal goal--top" />
      <div className="goal goal--bottom" />
      <div className="score score--left">03</div>
      <div className="score score--right">02</div>
      <div className="paddle paddle--ai"><span /></div>
      <div
        className={`paddle paddle--player ${active ? "is-active" : ""}`}
        style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }}
      ><span /></div>
      <div className="puck-trail" />
      <div className="puck"><span /></div>
      {!compact && <div className="drag-note">MOVE CURSOR / TOUCH TO CONTROL</div>}
    </div>
  );
}
