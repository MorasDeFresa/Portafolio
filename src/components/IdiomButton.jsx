/* eslint-disable react/prop-types */
const IdiomButton = ({ handleChangeLanguage }) => {
  return (
    <>
      <button
        onClick={() => {
          handleChangeLanguage("es");
        }}
      >
        Es
      </button>
      <button
        onClick={() => {
          handleChangeLanguage("en");
        }}
      >
        En
      </button>
    </>
  );
};

export default IdiomButton;
