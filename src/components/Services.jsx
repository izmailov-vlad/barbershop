import React from 'react'

const Services = () => {
    const mainServices = [
        {
            name: 'Стрижка "Крутт"',
            price: '2.200 ₽',
            description: 'Стрижка головы с массажем воротниковой зоны. Коррекция волос воском и нанесение премиального парфюма'
        },
        {
            name: 'Модельная стрижка',
            price: '1.700 ₽',
            description: 'Классическая стрижка головы с укладкой волос'
        },
        {
            name: 'Стрижка и борода',
            price: '2.800 ₽',
            description: 'Классическая стрижка головы с укладкой волос'
        },
        {
            name: 'Стрижка машинкой',
            price: '1.200 ₽',
            description: 'Стрижка головы машинкой несколькими насадками'
        },
        {
            name: 'Королевское бритьё',
            price: '1.700 ₽',
            description: 'Бритье осуществляется опасной бритвой с использованием пены и помазка'
        },
        {
            name: 'Моделирование бороды',
            price: '1.200 ₽',
            description: 'Создание красивой формы бороды'
        },
        {
            name: 'Детская стрижка',
            price: '1.500 ₽',
            description: 'Модельная стрижка для ребенка от 3-х лет'
        },
        {
            name: 'Отец и сын',
            price: '3.000 ₽',
            description: 'Модельные стрижки для отца и ребенка. Стрижка выполняется двумя специалистами на соседних креслах'
        },
        {
            name: 'Мужская династия',
            price: '4.500 ₽',
            description: 'Модельные стрижки трех мужчин из семьи'
        }
    ]

    const additionalServices = [
        { name: 'Воск', price: '400 ₽', description: 'Удаление волос воском в одной зоне' },
        { name: 'Патчи', price: '300 ₽', description: 'Помогает минимизировать отечность, а также осветлить темные круги под глазами' },
        { name: 'Скраб', price: '600 ₽', description: 'Скраб помогает обновить кожу на лице и сделать кожу мягче' },
        { name: 'Черная маска', price: '600 ₽', description: 'Эффективный метод избавления от прыщей и черных точек' },
        { name: 'Тонирование бороды', price: '900 ₽', description: 'Скрывает седину или неровности в росте волос на бороде' },
        { name: 'Укладка волос', price: '1.000 ₽', description: 'Мойка головы, использование 2-х средств для укладки и нанесение премиального парфюма' }
    ]

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <h2>Прайс на все услуги</h2>
                </div>

                <div className="services-grid">
                    <div className="services-section">
                        <h3>Основные услуги</h3>
                        <div className="services-list">
                            {mainServices.map((service, index) => (
                                <div key={index} className="service-item">
                                    <div className="service-header">
                                        <h4>{service.name}</h4>
                                        <span className="service-price">{service.price}</span>
                                    </div>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="services-section">
                        <h3>Дополнительные услуги</h3>
                        <div className="services-list">
                            {additionalServices.map((service, index) => (
                                <div key={index} className="service-item">
                                    <div className="service-header">
                                        <h4>{service.name}</h4>
                                        <span className="service-price">{service.price}</span>
                                    </div>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="services-cta">
                    <button className="btn btn-primary btn-large">Записаться</button>
                </div>
            </div>
        </section>
    )
}

export default Services
