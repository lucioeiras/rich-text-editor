export default function formatPaste(e) {
  e.preventDefault();

  const text = (e.clipboardData)
      ? (e.originalEvent || e).clipboardData.getData('text/plain')
      : (window.clipboardData ? window.clipboardData.getData('Text') : '');
  
  if (document.queryCommandSupported('insertText')) {
      document.execCommand('insertText', false, text);
  } else {
      const range = document.getSelection().getRangeAt(0);
      range.deleteContents();

      const textNode = document.createTextNode(text);
      range.insertNode(textNode);
      range.selectNodeContents(textNode);
      range.collapse(false);

      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
  }
}