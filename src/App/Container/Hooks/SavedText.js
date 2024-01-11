export const SavedText = () => {
    return localStorage.getItem('storedfile').replaceAll('\u200b', '');
}

export const HasSavedText = () => {
    return localStorage.getItem('storedfile') !== undefined && localStorage.getItem('storedfile') !== null;
}

export default SavedText;