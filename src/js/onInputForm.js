import debounce from 'lodash.debounce';

const input = document.querySelector('.input')
input.addEventListener('input', debounce(onInputForm, 1000))

export default function onInputForm(e) {
    e.preventDefault()
    const searchText = input.value.trim()
    console.log(searchText)
    if (!searchText) {
        return;
    }
    searchKeyword(searchText)
}