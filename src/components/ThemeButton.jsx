/* eslint-disable react/prop-types */
const ThemeButton = ({ setIsDark, isDark }) => {
  return (
    <>
      <div className="form-check form-switch">
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
          Checked switch checkbox input
        </label>
      </div>
    </>
  );
};

export default ThemeButton;
