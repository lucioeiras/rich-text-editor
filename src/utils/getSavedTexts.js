export default function getSavedTexts() {
  const savedTexts = localStorage.getItem('savedTexts');

  if (!savedTexts) {
    return [];
  } 

  return savedTexts.split('////k////,').map(text => {
    if (text.includes('////k////')) {
      text = text.replace('////k////', '');
    }

    return text;
  });
}