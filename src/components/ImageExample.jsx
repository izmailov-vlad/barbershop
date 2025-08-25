import React from 'react';
import { COLORS } from '../constants/colors';

// Пример импорта изображений (будет создан автоматически после запуска скриптов)
// import { BackgroundImages, ServiceImages, TeamImages, GalleryImages } from '../assets';

const ImageExample = () => {
    return (
        <div style={{
            padding: '2rem',
            backgroundColor: COLORS.BG_SECONDARY,
            color: COLORS.TEXT_PRIMARY
        }}>
            <h2 style={{ color: COLORS.ACCENT, marginBottom: '1rem' }}>
                Пример использования скачанных изображений
            </h2>

            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: COLORS.TEXT_PRIMARY, marginBottom: '0.5rem' }}>
                    📸 Фоновые изображения
                </h3>
                <p style={{ color: COLORS.TEXT_SECONDARY }}>
                    После запуска скрипта скрапинга здесь будут отображаться фоновые изображения
                </p>
                <div style={{
                    backgroundColor: COLORS.BORDER,
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    color: COLORS.TEXT_SECONDARY
                }}>
                    Placeholder для фоновых изображений
                </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: COLORS.TEXT_PRIMARY, marginBottom: '0.5rem' }}>
                    ✂️ Изображения услуг
                </h3>
                <p style={{ color: COLORS.TEXT_SECONDARY }}>
                    Иллюстрации для различных услуг барбершопа
                </p>
                <div style={{
                    backgroundColor: COLORS.BORDER,
                    height: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    color: COLORS.TEXT_SECONDARY
                }}>
                    Placeholder для изображений услуг
                </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: COLORS.TEXT_PRIMARY, marginBottom: '0.5rem' }}>
                    👥 Фотографии команды
                </h3>
                <p style={{ color: COLORS.TEXT_SECONDARY }}>
                    Фотографии мастеров и сотрудников
                </p>
                <div style={{
                    backgroundColor: COLORS.BORDER,
                    height: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    color: COLORS.TEXT_SECONDARY
                }}>
                    Placeholder для фотографий команды
                </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: COLORS.TEXT_PRIMARY, marginBottom: '0.5rem' }}>
                    🖼️ Галерея работ
                </h3>
                <p style={{ color: COLORS.TEXT_SECONDARY }}>
                    Примеры выполненных стрижек и работ
                </p>
                <div style={{
                    backgroundColor: COLORS.BORDER,
                    height: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    color: COLORS.TEXT_SECONDARY
                }}>
                    Placeholder для галереи работ
                </div>
            </div>

            <div style={{
                padding: '1rem',
                backgroundColor: COLORS.BG_PRIMARY,
                borderRadius: '8px',
                border: `1px solid ${COLORS.BORDER}`
            }}>
                <h4 style={{ color: COLORS.ACCENT, marginBottom: '0.5rem' }}>
                    🚀 Инструкция по запуску
                </h4>
                <ol style={{ color: COLORS.TEXT_SECONDARY, paddingLeft: '1.5rem' }}>
                    <li>Установите зависимости: <code style={{ color: COLORS.ACCENT }}>npm install</code></li>
                    <li>Запустите скрапинг: <code style={{ color: COLORS.ACCENT }}>npm run scrape-images</code></li>
                    <li>Обработайте изображения: <code style={{ color: COLORS.ACCENT }}>npm run process-images</code></li>
                    <li>Или запустите оба скрипта: <code style={{ color: COLORS.ACCENT }}>npm run images</code></li>
                </ol>
                <p style={{ color: COLORS.TEXT_SECONDARY, marginTop: '1rem', fontSize: '0.9rem' }}>
                    После выполнения скриптов изображения будут доступны в папке <code style={{ color: COLORS.ACCENT }}>src/assets/</code>
                    и вы сможете импортировать их в компоненты.
                </p>
            </div>
        </div>
    );
};

export default ImageExample;
