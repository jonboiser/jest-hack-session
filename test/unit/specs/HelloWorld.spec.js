import HelloWorldSnap from '@/components/HelloWorldSnap';
import { shallow } from '@vue/test-utils';

describe('HelloWorldSnap.vue', () => {
  it('should render correctly with props', () => {
    const wrapper = shallow(HelloWorldSnap, {
      propsData: {
        name: 'Plato',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
