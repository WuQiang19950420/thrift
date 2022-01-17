import { ref } from 'vue';
import { useStore } from 'vuex';

export default function () {
  const store = useStore();
  const allHeight = ref(window.innerHeight - store.state.tabBarHeight);
  return allHeight;
}
