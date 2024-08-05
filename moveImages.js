const fs = require('fs');
const path = require('path');

const sourceFile = './dist/posts.json';
const destinationFolder = './dist';

// Leer el archivo JSON
fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    try {
        const posts = JSON.parse(data);

        // Mapear cada objeto y mover la imagen
        posts.forEach((post) => {
            // const imagePath = '.' + post.image;
            // const imageName = path.basename(imagePath);
            const sourcePath = path.join(__dirname, "./web/", post.image);
            const destinationPath = path.join(__dirname, destinationFolder, post.image);
            console.log(`Source Path: ${sourcePath}`);
            console.log(`Destination Path: ${destinationPath}`);
            fs.mkdir(path.dirname(destinationPath), { recursive: true }, (err) => {
                if (err) {
                    console.error(`Error al crear el directorio ${path.dirname(destinationPath)}:`, err);
                    return;
                }
        
                fs.copyFile(sourcePath, destinationPath, (err) => {
                    if (err) {
                        console.error(`Error al mover la imagen ${post.image}:`, err);
                    } else {
                        console.log(`Imagen ${post.image} movida correctamente a ${destinationPath}`);
                    }
                });
            });
        });
    } catch (err) {
        console.error('Error al analizar el archivo JSON:', err);
    }
});