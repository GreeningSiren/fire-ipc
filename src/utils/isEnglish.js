let isEnglish = false;

if(localStorage.getItem('en')) {
    isEnglish = true
} else {
    isEnglish = false
}

export default isEnglish;