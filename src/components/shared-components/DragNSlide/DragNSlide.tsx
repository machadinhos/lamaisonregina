import { ReactNode, useEffect, useRef, useState } from "react";

export default function DragNSlide({ children }: { children: ReactNode | ReactNode[] }) {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftState, setScrollLeftState] = useState<number | null>(null);
  const [mouseMoved, setStateMouseMoved] = useState<number>(0);

  const itemsContainer = useRef<any>();

  // functions
  function handleMouseDown(e: any) {
    setIsDown(true);

    if (e.pageX === undefined) {
      setStartX(e.touches[0].pageX - (itemsContainer.current?.offsetLeft || 0));
    } else {
      setStartX(e.pageX - (itemsContainer.current?.offsetLeft || 0));
    }

    setScrollLeftState(itemsContainer.current?.scrollLeft ?? 0);
    setStateMouseMoved(0);
  }

  function handleMouseMove(e: any) {
    if (!isDown) {
      return;
    }

    const currentMousePositionInsideContainer =
      e.pageX === undefined
        ? e.touches[0].pageX - (itemsContainer.current?.offsetLeft || 0)
        : e.pageX - (itemsContainer.current?.offsetLeft || 0);

    setStateMouseMoved(currentMousePositionInsideContainer - startX);
  }

  useEffect(() => {
    if (itemsContainer.current?.scrollLeft) {
      itemsContainer.current.scrollLeft = (scrollLeftState || 0) - mouseMoved;
    }
  }, [scrollLeftState, mouseMoved]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflowX: "clip",
        cursor: isDown ? "grabbing" : "grab",
        userSelect: "none",
        maxWidth: "90vw",
      }}
      ref={itemsContainer}
      // MOUSE EVENTS
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={() => setIsDown(false)}
      onMouseLeave={() => setIsDown(false)}
      onMouseMove={(e) => handleMouseMove(e)}
      // TOUCH EVENTS
      onTouchStart={(e) => handleMouseDown(e)}
      onTouchEnd={() => setIsDown(false)}
      onTouchCancel={() => setIsDown(false)}
      onTouchMove={(e) => handleMouseMove(e)}
    >
      {children}
    </div>
  );
}
