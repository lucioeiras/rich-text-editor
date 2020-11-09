export default function toogleAction(action, value) {
  document.execCommand(action, false, value);
}