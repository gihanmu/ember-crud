import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Title ${i + 1}`;
  },
  body(i) {
    return `Body ${i + 1}`;
  },
});
