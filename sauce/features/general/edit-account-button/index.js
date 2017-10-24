import { Feature } from 'toolkit/core/feature';

export class EditAccountButton extends Feature {
  injectCSS() {
    if (this.settings.enabled === '1' && !YNABFEATURES['edit-account-icon']) {
      return require('./left.css');
    } else if (this.settings.enabled === '2') {
      return require('./hide.css');
    }
  }
}
