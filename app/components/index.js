import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class IndexComponent extends Component {
  @action
  deletePost() {
    alert('Hi');
  }
}
