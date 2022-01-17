import {
  Loading,
  Icon,
  NavBar,
  Popup,
  Dialog,
  Area,
  Form,
  Field,
  CellGroup,
  Button,
  RadioGroup,
  Radio,
  Skeleton,
  Empty,
  Cascader,
  Picker,
  Uploader,
  Checkbox
} from 'vant';
import type { App } from 'vue';
const components = [
  Loading,
  Icon,
  NavBar,
  Popup,
  Dialog,
  Area,
  Form,
  Field,
  CellGroup,
  Button,
  RadioGroup,
  Radio,
  Skeleton,
  Empty,
  Cascader,
  Picker,
  Uploader,
  Checkbox
];

export default function vantRegister(app: App) {
  for (let i = 0; i < components.length; i++) {
    app.use(components[i]);
  }
}
