export const SavedText = () => {
    return localStorage.getItem('storedfile').replaceAll('\u200b', '');
}

export const HasSavedText = () => {
    return localStorage.getItem('storedfile') !== undefined;
}

export default SavedText;