import Mocking from '@/components/Mocking';
import { mount } from '@vue/test-utils';

describe('Mocking.vue', () => {
  it('should render correctly with props', async () => {
    const wrapper = mount(Mocking);
    await wrapper.vm.$nextTick();
    expect(wrapper.find('#hello').text()).toEqual('Hello Bob');
  });
});
