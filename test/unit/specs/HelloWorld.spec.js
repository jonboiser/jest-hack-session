import HelloWorldSnap from '@/components/HelloWorldSnap';
import { shallowMount } from '@vue/test-utils';

describe('HelloWorldSnap.vue', () => {
  it('should render correctly with props', () => {
    const wrapper = shallowMount(HelloWorldSnap, {
      propsData: {
        name: 'Plato',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
