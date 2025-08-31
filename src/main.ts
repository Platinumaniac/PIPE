import { open } from '@tauri-apps/plugin-dialog';

const file = await open({
  multiple: false,
  directory: false,
});
console.log(file);