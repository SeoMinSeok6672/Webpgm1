import { useState } from "react";

const Area = () => {
  const [size, setSize] = useState({ width: 100, height: 100 });

  const increaseWidth = () => {
    if (size.width < 150) {
      setSize({ ...size, width: size.width + 10 });
    }
  };

  const decreaseWidth = () => {
    if (size.width > 0) {
      setSize({ ...size, width: size.width - 10 });
    }
  };

  const increaseHeight = () => {
    if (size.height < 150) {
      setSize({ ...size, height: size.height + 10 });
    }
  };

  const decreaseHeight = () => {
    if (size.height > 0) {
      setSize({ ...size, height: size.height - 10 });
    }
  };

  return (
    <div>
      <h1>너비: {size.width}, 높이: {size.height}</h1>

      <button onClick={increaseWidth} disabled={size.width >= 150}>
        너비 증가
      </button>

      <button onClick={decreaseWidth} disabled={size.width <= 0}>
        너비 감소
      </button>

      <button onClick={increaseHeight} disabled={size.height >= 150}>
        높이 증가
      </button>

      <button onClick={decreaseHeight} disabled={size.height <= 0}>
        높이 감소
      </button>
    </div>

    
  );
};

export default Area;
