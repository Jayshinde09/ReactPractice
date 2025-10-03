import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function WindowSizeComponent() {
  const width = useWindowWidth();

  return <h2>Window width: {width}px</h2>;
}
export default WindowSizeComponent;
