import { css } from 'emotion';
import styles from './Token.less';
import { ITheme } from '../../lib/ThemeManager';

const jsStyles = {
  warning(t: ITheme) {
    return css`
      .${styles.token}& {
        border: 1px solid ${t.warningMain};
        box-shadow: 0 0 0 1px ${t.warningMain};
      }
    `;
  },

  error(t: ITheme) {
    return css`
      .${styles.token}& {
        border: 1px solid ${t.errorMain};
        box-shadow: 0 0 0 1px ${t.errorMain};
      }
    `;
  },
};

export default jsStyles;