document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.galeria img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            const altTexto = this.alt;
            alert(`¡Hiciste clic en: ${altTexto}!`);
            // Aquí podrías agregar más interactividad, como mostrar la imagen en un modal,
            // cambiar el borde, etc.
        });
    });
});