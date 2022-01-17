import { customRef } from 'vue';

export default function (value: any, delay: any) {
  let timer: any = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      }
    };
  });
}
