import { Store } from 'vuex';
import { IRootAllType } from '@/store/type';
import { computed } from '@vue/reactivity';
export function getUserData(store: Store<IRootAllType>) {
  return computed(() => {
    return store.state.me.userData;
  });
}
