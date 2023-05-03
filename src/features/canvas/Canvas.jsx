import React from 'react';

import Color from './Color';
import Font from './Font';
import styles from './canvas.module.css';
 function Canvas() {
  return(
    <div className={styles.canvas}>

      <Color />
      <Font />
     
    </div>
  )
}
export default Canvas