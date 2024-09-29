//header.test.ts

import { mount } from '@vue/test-utils';
import Header from '../src/components/Header.vue';

describe('Header.vue', () => {
  it('renders the title correctly', () => {
    const wrapper = mount(Header, {
      props: {
        title: 'Users'
      }
    });
    const h1Element = wrapper.find('h1');
    expect(h1Element.text()).toContain('Users');
  });
});