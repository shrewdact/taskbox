import Vue from 'vue';
import PureTaskList from '../../src/components/PureTaskList.vue';
import { withPinnedTasks } from '../../src/components/PureTaskList.stories';

it('renders pinned tasks at the start of the list', () => {
  const constructor = Vue.extend(PureTaskList);
  const vm = new constructor({
    propsData: { tasks: withPinnedTasks }
  }).$mount();

  const firstTaskPinned = vm.$el.querySelector(
    '.list-item:nth-child(1).TASK_PINNED'
  );

  // We expect the pinned task to be rendered first, not at the end
  expect(firstTaskPinned).not.toBe(null);
});
