import React from 'react'

const Team = () => {
    const teamMembers = [
        {
            name: 'Антон Хютт',
            position: 'Основатель',
            description: 'Опытный мастер с многолетним стажем в мужских стрижках',
            image: '/placeholder-avatar.jpg'
        },
        {
            name: 'Андрей Зуднев',
            position: 'Старший барбер',
            description: 'Специалист по современным мужским стрижкам и укладкам',
            image: '/placeholder-avatar.jpg'
        }
    ]

    const features = [
        {
            title: 'Мужской клуб',
            description: 'Создаем комфортную, мужскую атмосферу для каждого клиента. Наливаем по желанию чай, кофе или дорогой виски'
        },
        {
            title: 'Мастера',
            description: 'С опытом работы от 3-х лет и с большим количеством разных стрижек'
        },
        {
            title: 'Кресла с массажем',
            description: 'Новое оборудование и кресла, помывочная зоны головы с массажем, яркий свет, премиальная косметика'
        },
        {
            title: 'Телевизоры и Xbox',
            description: 'Во время стрижки вы можете посмотреть фильм или поиграть в Xbox в зоне отдыха'
        }
    ]

    return (
        <section id="masters" className="team">
            <div className="container">
                <div className="section-header">
                    <h2>Мы отличаемся от других</h2>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="team-section">
                    <h3>Наша команда</h3>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-member">
                                <div className="member-image">
                                    <div className="member-placeholder">
                                        <span>Фото {member.name}</span>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>{member.name}</h4>
                                    <p className="member-position">{member.position}</p>
                                    <p className="member-description">{member.description}</p>
                                    <button className="btn btn-primary">Записаться к мастеру</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
