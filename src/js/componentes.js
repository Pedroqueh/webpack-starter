import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log("Creando etiqueta h1, en el HTML");

    const h1 = document.createElement("h1");
    h1.innerText = `¡Hola, ${nombre}`;

    document.body.append(h1);
}

/** problema al vincular elementos al html, desde el HTML*/
/*const img = document.createElement("img");
    img.src = './assets/webpack-sprite.png';
    document.body.append(img);
    */