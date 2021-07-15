import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') body;
  @attr('string') title;
}
