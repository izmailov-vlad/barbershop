import React from 'react'
import './Team.css'
import { COLORS } from '../../constants/colors'
import { Button } from '../ui/Button'

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
                    <h2 style={{ color: COLORS.TEXT_PRIMARY }}>Мы отличаемся от других</h2>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card" style={{
                            backgroundColor: COLORS.BG_PRIMARY,
                            borderColor: COLORS.BORDER
                        }}>
                            <h3 style={{ color: COLORS.TEXT_PRIMARY }}>{feature.title}</h3>
                            <p style={{ color: COLORS.TEXT_SECONDARY }}>{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="team-section">
                    <h3 style={{ color: COLORS.TEXT_PRIMARY }}>Наша команда</h3>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-member">
                                <div className="member-image">
                                    <div className="member-placeholder" style={{
                                        backgroundColor: COLORS.BORDER,
                                        color: COLORS.TEXT_SECONDARY
                                    }}>
                                        <span>Фото {member.name}</span>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4 style={{ color: COLORS.TEXT_PRIMARY }}>{member.name}</h4>
                                    <p className="member-position" style={{ color: COLORS.TEXT_SECONDARY }}>{member.position}</p>
                                    <p className="member-description" style={{ color: COLORS.TEXT_SECONDARY }}>{member.description}</p>
                                    <Button variant="primary" size="medium">
                                        Записаться к мастеру
                                    </Button>
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
