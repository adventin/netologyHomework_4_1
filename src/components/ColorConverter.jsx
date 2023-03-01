import { useState } from "react";

export default function ColorConverter(props) {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');
  const [rgbText, setRgbText] = useState('');

  const onHandleChange = ({ target }) => {
    let rgbTmp = '';
    let rgbTextTmp = '';
    const { value } = target;
    const regexHex = new RegExp(/^#([A-Fa-f0-9]{6})$/);

    if (value.length > 7) {
      rgbTmp = 'rgb(254 75 53)';
      rgbTextTmp = 'Ошибка';
    }

    if (regexHex.test(value)) {
      const splitedHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
      rgbTmp = 'rgb(254 75 53)';
      rgbTextTmp = 'Ошибка';      

      if (splitedHex && splitedHex.length) {
        let aRgb = splitedHex.splice(1, 3).map((colorPart) => parseInt(colorPart, 16));
        rgbTmp = `rgb(${aRgb.join(' ')})`;
        rgbTextTmp = `rgb(${aRgb.join(', ')})`;
      }

    }

    setHex(value);
    setRgb(rgbTmp);
    setRgbText(rgbTextTmp);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="converter-wrapper" style={{ background: rgb }}>
      <form className="converter" onSubmit={onHandleSubmit}>
        <label>
          <input className="converter-inputfield" name="hex" value={hex} onChange={onHandleChange} />
        </label>
        <div className="converter-outputfield">{rgbText}</div>
      </form>
    </div>
  );
}