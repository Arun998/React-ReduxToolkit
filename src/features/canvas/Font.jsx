import { useSelector, useDispatch } from 'react-redux';
import { changeFont, changeFontStyle, selectFont,selectFontStyle } from './canvasSlice';
import styles from './canvas.module.css';

const Font = () => {
  const font = useSelector(selectFont);
  const fontStyle = useSelector(selectFontStyle);
  const dispatch = useDispatch();

  return(
    <div className={styles.font}>
      <h2>Font</h2>
      <p>
        <span style={{fontSize: `${font}px`,fontStyle:`${fontStyle}`}}>
          Redux Tool Kit(RTK) is the modern way to
          learn Redux. Let's start with the basics.
        </span>
      </p>
      <input 
        type="range" 
        min="10" 
        max="30" 
        value={font} 
        onChange={(e) => dispatch(changeFont(e.target.value))}/>
      <p>{font}px</p>
      <button 
          className={styles.btn}
          onClick={(fontStyle) => dispatch(changeFontStyle("italic"))}>
            italic
        </button>
        <button 
          className={styles.btn}
          onClick={(fontStyle) => dispatch(changeFontStyle("normal"))}>
            normal
        </button>
        <button 
          className={styles.btn}
          onClick={(fontStyle) => dispatch(changeFontStyle("oblique"))}>
            Oblique
        </button>
        
      
    </div>
  );
};

export default Font;
