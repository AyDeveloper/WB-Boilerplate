const showLog = () => {
   console.log('dom');
}

const styleBody = () => {
    const body = document.body;
    body.style.backgroundColor = 'red';
    const div = document.createElement('div');
    div.innerText = 'New background changed';
}

export { styleBody, showLog as default };


