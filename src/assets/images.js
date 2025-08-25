// Автоматический индекс изображений из каталога @assets
// Собирает URL всех файлов изображений и экспортирует удобные помощники

// Внимание: .gitignore внутри assets исключает изображения из Git.
// Этот модуль генерируется во время сборки и работает в рантайме Vite.

const imageModules = import.meta.glob(
    [
        './**/*.png',
        './**/*.jpg',
        './**/*.jpeg',
        './**/*.gif',
        './**/*.webp',
        './**/*.svg',
        './**/*.avif',
    ],
    { eager: true, query: '?url' }
)

// Преобразуем объект модулей в карту: относительный путь → URL
const pathToUrl = {}
for (const [relativePath, mod] of Object.entries(imageModules)) {
    // для ?url модуль экспортирует значение по умолчанию
    const url = mod && (mod.default || mod)
    if (typeof url === 'string') {
        pathToUrl[relativePath.replace(/^\.\//, '')] = url
    }
}

// Утилита: получить URL по относительному пути внутри src/assets
export function getImageUrl(relativePath) {
    return pathToUrl[relativePath] || null
}

// Утилита: получить все пары { path, url }
export function getAllImages() {
    return Object.entries(pathToUrl).map(([path, url]) => ({ path, url }))
}

// Утилита: отфильтровать по поддиректории, например 'component-logo/'
export function getImagesByDir(prefix) {
    const normalized = prefix.endsWith('/') ? prefix : `${prefix}/`
    return Object.entries(pathToUrl)
        .filter(([p]) => p.startsWith(normalized))
        .map(([path, url]) => ({ path, url }))
}

// Утилита: создать объект-дерево по папкам
export function getImagesTree() {
    const tree = {}
    for (const [path, url] of Object.entries(pathToUrl)) {
        const segments = path.split('/')
        let node = tree
        for (let i = 0; i < segments.length; i++) {
            const seg = segments[i]
            if (i === segments.length - 1) {
                node[seg] = url
            } else {
                node[seg] = node[seg] || {}
                node = node[seg]
            }
        }
    }
    return tree
}

// Экспорт по умолчанию — карта путей на URL
export default pathToUrl


