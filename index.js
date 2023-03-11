const nameInput = document.getElementById('name');
const urlInput = document.getElementById('url');
const imageInput = document.getElementById('image');

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    
    const name = nameInput.value;
    const url = urlInput.value;
    const image = imageInput.value;
    
    const newAcceso = document.createElement('a');
    newAcceso.href = url;
    newAcceso.target = '_blank';

    newAcceso.innerHTML = `
    <div class="box">
        <div class="img">
            <img src="${image}"
                width="32px" />
        </div>
        <span>${name}</span>
    </div>
    `;
    const parentElement = document.querySelector('.accesos').parentNode;

    const accesosDiv = document.querySelector('.accesos');
    accesosDiv.appendChild(newAcceso);
    
    nameInput.value = '';
    urlInput.value = '';
    imageInput.value = '';
})

