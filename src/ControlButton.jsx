const ControlButton = ({ label, onActivate, onDeactivate, style }) => {
  return (
    <button
      className={`hover:scale-105 opacity-30 hover:opacity-60 transition-all ${style}`}
      onMouseDown={onActivate}
      onMouseUp={onDeactivate}
      onTouchStart={onActivate}
      onTouchEnd={onDeactivate}
    >
      <img
        src={label}
        className="w-12 h-12 object-contain pointer-events-none"
      />
    </button>
  );
};

export default ControlButton;
