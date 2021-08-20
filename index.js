const body = document.getElementById('body');
const h1 = document.querySelector('h1');

/////////////////////BOTONES HEADER////////////////
const header = document.getElementById("header");
//boton imagen
const btnPanelImagen = document.getElementById("boton-imagen");
//boton texto
const btnPanelTexto = document.getElementById("boton-texto");
//boton modo oscuro
const btnModoOscuro = document.getElementById("boton-modo-oscuro");
const abrirPanel = document.querySelectorAll("abrir-panel");

/////////////////////CUERPO MEME////////////////
const main = document.getElementById("main");
//contenedor meme
const containMeme = document.querySelector(".contain-meme");
//texto superior
const topText = document.getElementById("top-text");
//texto inferior
const bottomText = document.getElementById("bottom-text");
//array textos (sup e inf)
const textosMeme = document.querySelectorAll(".text");
//box donde va la imagen
const imgMeme = document.querySelector(".imagen-meme");

/////////////////////BOTON DESCARGA MEME////////////////
const btnDescargaMeme = document.getElementById("boton-descarga");

/////////////////////ASIDE////////////////
const aside = document.getElementById("aside");

/////////////////////ASIDE IMAGE OPTIONS////////////////
//seccion de imagen
const seccionImg = document.getElementById("section-imagen");
//input url
const inputUrlImg = document.getElementById("url-img-options");
//color fondo
const inputColorFondoImg = document.getElementById("color-fondo-img");
const spanColorFondoImg = document.getElementById("span-color-img-fondo");
//tonalidad fondo
const selectTonalidadFondoImg = document.getElementById("tonalidad-img-options");
//filtros
const filtros = document.querySelectorAll(".input-filtros-img");
//input brillo
const brilloFiltrosImg = document.getElementById('brillo-filtros-img');
//input opacidad
const opacidadFiltrosImg = document.getElementById('opacidad-filtros-img');
//input contraste
const contrasteFiltrosImg = document.getElementById('contraste-filtros-img');
//input desenfoque
const desenfoqueFiltrosImg = document.getElementById('desenfoque-filtros-img');
//input escala de grises
const escalaFiltrosImg = document.getElementById('escala-filtros-img');
//input sepia
const sepiaFiltrosImg = document.getElementById('sepia-filtros-img');
//input HUE
const hueFiltrosImg = document.getElementById('hue-filtros-img');
//input saturado
const saturadoFiltrosImg = document.getElementById('saturado-filtros-img');
//input negativo
const negativoFiltrosImg = document.getElementById('negativo-filtros-img');
//boton para reestablecer filtros
const buttonRestablecerFiltrosImg = document.getElementById('button-restablecer-filtros-img');

/////////////////////ASIDE TEXT OPTIONS////////////////
const seccionTxt = document.getElementById("seccion-texto");
//texto superior
const topTextOptions = document.getElementById("top-text-options");
const btnSinTextoTop = document.getElementById("no-superior-text");
//texto inferior
const bottomTextOptions = document.getElementById("bottom-text-options");
const btnSinTextoBottom = document.getElementById("no-bottom-text");
//fuente
const buttonFuentesText = document.getElementById('button-fuentes-text');
//input tamaño fuente
const tamañoFuenteTextOptions = document.getElementById('tamaño-fuente-text-options');
//boton alinear texto a la izquierda
const buttonLeftTextOptions = document.getElementById('button-left-text-options');
//boton alinear texto centrado
const buttonCenterTextOptions = document.getElementById('button-center-text-options');
//boton alinear texto a la derecha
const buttonRightTextOptions = document.getElementById('button-right-text-options');
//input color texto
const inputColorTexto = document.getElementById('input-color-texto');
//input color fondo texto
let inputColorFondoTexto = document.getElementById('input-color-fondo-texto');
//input fondo transparente
const transparentTextOption = document.getElementById('transparent-text-option');
//boton sin contorno el texto
const buttonNingunoTextOptions = document.getElementById('button-ninguno-text-options');
//boton contorno texto claro
const buttonClaroTextOptions = document.getElementById('button-claro-text-options');
//boton contorno texto oscuro
const buttonOscuroTextOptions = document.getElementById('button-oscuro-text-options');
//input espaciado texto
const espaciadoTextOptions = document.getElementById('espaciado-text-options');
//input interlineado texto
const interlineadoTextOptions = document.getElementById('interlineado-text-options');

/////////////////////////////////////FUNCIONALIDADES IMAGEN///////////////////////////////
//colocar imagen
inputUrlImg.addEventListener('keyup', () => {
    const urlImg = inputUrlImg.value;
    imgMeme.style.backgroundImage = `url('${urlImg}')`;
});
//cambiar color imagen

inputColorFondoImg.addEventListener('input', (e) => {
    const color = e.target.value;
    imgMeme.style.backgroundColor = `${color}`;
    spanColorFondoImg.textContent = `${color};`
});

selectTonalidadFondoImg.addEventListener('change', () => {
    imgMeme.style.backgroundBlendMode = selectTonalidadFondoImg.value;
});

//filtros

// Brillo
brilloFiltrosImg.addEventListener('change', () => {
    imgMeme.style.filter = `brightness(${brilloFiltrosImg.value})`;
});

// Opacidad
opacidadFiltrosImg.addEventListener('change', () => {
    imgMeme.style.filter = `opacity(${opacidadFiltrosImg.value})`;
});

// Contraste
contrasteFiltrosImg.addEventListener('change', () => {
    imgMeme.style.filter = `contrast(${contrasteFiltrosImg.value}%)`;
});

//Desenfoque
desenfoqueFiltrosImg.addEventListener('change', () => {
    imgMeme.style.filter = `blur(${desenfoqueFiltrosImg.value}px)`;
});

//- Escala de grises
escalaFiltrosImg.addEventListener('change', () => {
    imgMeme.style.filter = `grayscale(${escalaFiltrosImg.value}%)`;
});

// Sepia
sepiaFiltrosImg.addEventListener('change', () => {
    imgMeme.style.filter = `sepia(${sepiaFiltrosImg.value}%)`;
});

//HUE
hueFiltrosImg.addEventListener('change', () => {
    imgMeme.style.filter = `hue-rotate(${hueFiltrosImg.value}deg)`;
});

// Saturado
saturadoFiltrosImg.addEventListener('change', () => {
    imgMeme.style.filter = `saturate(${saturadoFiltrosImg.value}%)`;
});

//Negativo
negativoFiltrosImg.addEventListener('change', () => {
    imgMeme.style.filter = `invert(${negativoFiltrosImg.value})`;
});

//Reestablecer valores 
const filtrosAplicados = () => {
    imgMeme.style.filter = `opacity(${opacidadFiltrosImg.value})`, imgMeme.style.filter = `opacity(${opacidadFiltrosImg.value})`, imgMeme.style.filter = `contrast(${contrasteFiltrosImg.value})`, imgMeme.style.filter = `blur(${desenfoqueFiltrosImg.value})`, imgMeme.style.filter = `grayscale(${escalaFiltrosImg.value})`, imgMeme.style.filter = `sepia(${sepiaFiltrosImg.value})`, imgMeme.style.filter = `hue-rotate(${hueFiltrosImg.value})`, imgMeme.style.filter = `saturate(${saturadoFiltrosImg.value})`, imgMeme.style.filter = `invert(${negativoFiltrosImg.value})`
};

buttonRestablecerFiltrosImg.addEventListener('click', () => {
    brilloFiltrosImg.value = '1';
    opacidadFiltrosImg.value = '1';
    contrasteFiltrosImg.value = '100';
    desenfoqueFiltrosImg.value = '0';
    escalaFiltrosImg.value = '0';
    sepiaFiltrosImg.value = '0';
    hueFiltrosImg.value = '0';
    saturadoFiltrosImg.value = '100';
    negativoFiltrosImg.value = '0';
    filtrosAplicados();
});

/////////////////////////////////////FUNCIONALIDADES TEXTO///////////////////////////////
//abrir y cerrar el panel de texto
btnPanelTexto.addEventListener('click', () => {
    seccionImg.classList.add('none');
    seccionTxt.classList.remove('none');
});
btnPanelImagen.addEventListener('click', () => {
    seccionTxt.classList.add('none');
    seccionImg.classList.remove('none')
});
//cambiar texto del meme
topTextOptions.addEventListener('keyup', (e) => {
    const textoSuperior = e.target.value;
    topText.textContent = `${textoSuperior}`;
});
bottomTextOptions.addEventListener('keyup', (e) => {
    const textoInferior = e.target.value;
    bottomText.textContent = `${textoInferior}`;
});
//sacar el texto del meme
btnSinTextoTop.addEventListener('click', () => {
    if (btnSinTextoTop.checked) {
        topText.classList.add('none');
    } else if (!btnSinTextoTop.checked) {
        topText.classList.remove('none');
    }
});

btnSinTextoBottom.addEventListener('click', () => {
    if (btnSinTextoBottom.checked) {
        bottomText.classList.add('none');
    } else if (!btnSinTextoBottom.checked) {
        bottomText.classList.remove('none');
    }
});

//cambiar la fuente
buttonFuentesText.addEventListener('change', (e) => {
    for (let i = 0; i < textosMeme.length; i++) {
        textosMeme[i].style.fontFamily = `${buttonFuentesText.value}`;
    }
});

//cambiar tamaño fuente

tamañoFuenteTextOptions.addEventListener('change', (e) => {
    for (let i = 0; i < textosMeme.length; i++) {
        textosMeme[i].style.fontSize = `${tamañoFuenteTextOptions.value}px`;

    }
});

//alinear texto
buttonLeftTextOptions.addEventListener('click', () => {
    for (let i = 0; i < textosMeme.length; i++) {
        textosMeme[i].style.textAlign = 'left';
    }

});
buttonCenterTextOptions.addEventListener('click', () => {
    for (let i = 0; i < textosMeme.length; i++) {
        textosMeme[i].style.textAlign = 'center';
    }

});
buttonRightTextOptions.addEventListener('click', () => {
    for (let i = 0; i < textosMeme.length; i++) {
        textosMeme[i].style.textAlign = 'right';
    }

});

//color texto

inputColorTexto.addEventListener('input', () => {
    for (let i = 0; i < textosMeme.length; i++) {
        textosMeme[i].style.color = `${inputColorTexto.value}`;
    }

});

//color fondo texto 

inputColorFondoTexto.addEventListener('input', () => {
    for (let i = 0; i < textosMeme.length; i++) {
        textosMeme[i].style.backgroundColor = `${inputColorFondoTexto.value}`;
    }

});

//fondo transparente

transparentTextOption.addEventListener('change', (e) => {
    for (let i = 0; i < textosMeme.length; i++) {
        if (transparentTextOption.checked) {
            textosMeme[i].style.backgroundColor = `transparent`;
        } else if (!transparentTextOption.checked) {
            textosMeme[i].style.backgroundColor = `beige`;
        }

    }

});

//contorno de letra
//claro
buttonClaroTextOptions.addEventListener('click', (e) => {
    for (let i = 0; i < textosMeme.length; i++) {
        textosMeme[i].style.webkitTextStroke = `1px white`;
    }
});
//oscuro
buttonOscuroTextOptions.addEventListener('click', (e) => {
    for (let i = 0; i < textosMeme.length; i++) {
        textosMeme[i].style.webkitTextStroke = `1px black`;

    }
});
//ninguno
buttonNingunoTextOptions.addEventListener('click', (e) => {
    for (let i = 0; i < textosMeme.length; i++) {
        textosMeme[i].style.webkitTextStroke = `1px transparent`;

    }
});

//espaciado

espaciadoTextOptions.addEventListener('change', () => {
    for (let i = 0; i < textosMeme.length; i++) {
        textosMeme[i].style.letterSpacing = `${espaciadoTextOptions.value}px`

    }
});

//interlineado

interlineadoTextOptions.addEventListener('click', () => {
    for (let i = 0; i < textosMeme.length; i++) {
        textosMeme[i].style.lineHeight = `${espaciadoTextOptions.value}px`

    }
});

//descargar meme

const descargarMeme =
    btnDescargaMeme.addEventListener('click', () => {
        domtoimage.toBlob(boxMeme).then(function(blob) {
            saveAs(blob, 'mi-meme.png')
        })
    });


//modo oscuro
const botones = document.querySelectorAll('.boton');
const titulos = document.querySelectorAll('.titulos');

btnModoOscuro.addEventListener('click', () => {
    for (let index = 0; index < botones.length; index++) {
        botones[index].classList.toggle('dark-mode-inverse');
    }
    for (let index = 0; index < titulos.length; index++) {
        titulos[index].classList.toggle('dark-mode');
    }
    for (let index = 0; index < textosMeme.length; index++) {
        textosMeme[index].classList.toggle('dark-mode');
        textosMeme[index].style.border = '0.5px solid white';
    }
    header.classList.toggle('dark-mode');
    header.style.border = '0.5px solid white';
    aside.classList.toggle('dark-mode');
    aside.style.border = '0.5px solid white';
    main.classList.toggle('dark-mode');
    imgMeme.style.backgroundColor = 'white';
})