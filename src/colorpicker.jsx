import { useState } from "react";
function Colorpicking() {
  const [colour, setcolour] = useState("#ffffff");
  const handlecolour = (event) => {
    setcolour(event.target.value);
  };

  return (
    <div className="color-container">
      <h1>Color Picking App</h1>
      <div
        style={{
          backgroundColor: colour,
        }}
        className="color-display"
      >
        <p>Selected Color: {colour}</p>
      </div>
      <label>select a color</label>
      <input type="color" value={colour} onChange={handlecolour} />
      
    </div>
  );
}
export default Colorpicking;
