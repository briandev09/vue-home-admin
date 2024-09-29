//header.test.ts

import { mount } from '@vue/test-utils';
import HeaderBar from '../../src/components/HeaderBar.vue';

describe('HeaderBar.vue', () => {
  it('renders the title correctly', () => {
    const title = 'Users'
    const wrapper = mount(HeaderBar, {
      props: {
        title
      }
    });
    const h1Element = wrapper.find('h1');
    expect(h1Element.text()).toBe(title);
  });
});