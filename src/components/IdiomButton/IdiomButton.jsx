/* eslint-disable react/prop-types */
import Select from "react-select";

const IdiomButton = ({ handleChangeLanguage, setLanguage, language }) => {
  const options = [
    {
      value: "es",
      label: "Español",
      image:
        "http://purecatamphetamine.github.io/country-flag-icons/3x2/CO.svg",
    },
    {
      value: "en",
      label: "English",
      image:
        "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    },
  ];

  const defaultValue = options.find((option) => option.value === language);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 150,
      height: 10,
      backgroundColor: "var(--background-color)",
      "@media screen and (max-width: 600px)": {
        width: "60%",
        fontSize: 12,
      },
    }),
  };

  const customOption = ({
    data,
    isSelected,
    isFocused,
    innerRef,
    innerProps,
  }) => (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: isSelected
          ? "lightblue"
          : isFocused
          ? "lightgrey"
          : "var(--background-color)",
        padding: "5px",
        cursor: "pointer", // Agregamos un cursor indicando que es seleccionable
      }}
    >
      <img
        src={data.image}
        alt={data.label}
        style={{ width: "20px", marginRight: "10px" }}
      />
      <span>{data.label}</span>
    </div>
  );

  const customSingleValue = ({ data }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        marginTop: "-20px",
      }}
    >
      <img
        src={data.image}
        alt={data.label}
        style={{ width: "20px", marginRight: "10px" }}
      />
      <span style={{ lineHeight: 1, margin: 0, padding: 0 }}>{data.label}</span>
    </div>
  );

  return (
    <div
      style={{
        marginRight: "15px",
      }}
    >
      <Select
        options={options}
        components={{
          Option: customOption,
          SingleValue: customSingleValue,
        }}
        onChange={(event) => {
          setLanguage(event?.value);
          handleChangeLanguage(event?.value);
        }}
        value={defaultValue}
        isSearchable={false}
        styles={customStyles}
      />
    </div>
  );
};

export default IdiomButton;
