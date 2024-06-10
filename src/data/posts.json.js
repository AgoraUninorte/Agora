import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import _ from 'lodash';
import RSS from 'rss';

const config = {
    "domain": "http://localhost:3000",
    "port": 3000,
    "title": "Grupo Agora Uninorte",
    "description": "Grupo estudiantil de economía de la Universidad del Norte",
}

const directoryPath = path.join(__dirname, '../');
const posts = [];

const domain = config.domain;

function parseDate(dateString) {
    const [day, month, year] = dateString.split('/');
    return new Date(year, month - 1, day);
}

let feed = new RSS({
    title: config.title,
    description: config.description,
    feed_url: domain + '/rss.xml',
    site_url: domain,
    managingEditor: 'arosenstielhl@uninorte.edu.co',
    webMaster: 'arosenstielhl@uninorte.edu.co',
    language: 'es',
    pubDate: new Date().toISOString(),
    ttl: '600',
});

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach((file) => {
        if (file.endsWith('.md')) {
            const filePath = path.join(directoryPath, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const fileName = path.basename(filePath, '.md');

            // Extract URL and YAML fields
            const post = extractYamlFields(fileContent);

            if (post.index === false) {
                return;
            }

            const parsedPost = {
                ...post,
                date: parseDate(post.date),
                url: domain + "/" + fileName,
                title: post.title || _.startCase(post.fileName),
                author: post.author || "Grupo Agora Uninorte"

            }
            // Add data to posts array
            posts.push(parsedPost);
            feed.item(parsedPost);
        }
    });
    // Generate JSON file
    const jsonFilePath = path.join('./public', 'posts.json');
    fs.writeFileSync(jsonFilePath, JSON.stringify(posts, null, 2));


    // Generate ATOM RSS XML file
    const rssFilePath = path.join('./public', 'rss.xml');
    fs.writeFileSync(rssFilePath, feed.xml({ indent: true }));

    process.stdout.write(JSON.stringify(posts, null, 2))
});

// function extractUrl(fileContent) {
//     // Implement your logic to extract the URL from the file content
//     // For example, you can use regular expressions or a markdown parser library
//     // and return the extracted URL
// }

function extractYamlFields(fileContent) {
    // Implement your logic to extract the YAML fields (image, title, description)
    // from the file content
    // You can use a YAML parser library to parse the YAML front matter
    // and return the extracted fields as an object
    const yamlContent = fileContent.split('---')[1];

    // Parsear el contenido de YAML
    const fields = yaml.load(yamlContent); // Aquí está el cambio

    // Devolver los campos extraídos como un objeto
    return fields;
}
