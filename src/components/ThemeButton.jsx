/* eslint-disable react/prop-types */
const ThemeButton = ({ setIsDark, isDark }) => {
  return (
    <div
      className="form-check form-switch"
      style={{
        marginTop: "8px",
      }}
    >
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        checked={isDark}
        onChange={() => {
          setIsDark(!isDark);
        }}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
        {isDark ? "Dark mode" : "Ligth mode"}
      </label>
    </div>
  );
};

export default ThemeButton;
