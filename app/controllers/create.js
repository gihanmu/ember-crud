import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class CreateController extends Controller {
  @action
  createPost(event) {
    event.preventDefault();
    const post = {
      title: this.title,
      body: this.body,
    };
    const storedPost = this.store.createRecord('post', post);
    storedPost.save();
  }
}
