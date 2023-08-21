/* eslint-disable react/prop-types */
import "@fortawesome/fontawesome-free/css/all.css";

function Rating({ rating, onHandleClick, style }) {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };
  const starContainerStyle = {
    display: "flex",
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            className={`fa${rating > i ? "s" : "r"} fa-star`}
            onClick={() => onHandleClick(i)}
            style={style}
            key={i}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Rating;
