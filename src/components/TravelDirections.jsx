import {useTranslation} from 'react-i18next'
import {Container} from '../ui/Container'
import {Reserve} from '../ui/Reserve'

import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

// eslint-disable-next-line react/prop-types
const Card = ({title, imageUrl, columns, rows}) => {

    let customStyle

    if (window.screen.width > 430) {
        customStyle = {gridColumn: columns, gridRow: rows};
    }

    return (
        <div
            className={"w-full h-full overflow-hidden relative rounded-2xl shadow-[10px_10px_5px_1px_rgba(0,0,0,0.2)]"}
            style={customStyle}
        >
            <div
                className='absolute top-0 left-0 w-full h-full z-[1]'
                style={{
                    backgroundImage:
                        'linear-gradient(180deg, #141E3000 60%, #495d0d 100%)',
                }}
            ></div>
            <LazyLoadImage
                className='w-full h-full object-cover'
                src={imageUrl}
                alt={title}
                effect='blur'
                wrapperClassName={"w-full h-full"}
            />
            <div className='absolute bottom-0 left-0 z-[2] w-full p-3'>
                <div className="text-white text-lg">$ 999</div>
                <h3 className='mb-5 text-white sm:text-2xl lg:text-xl text-lg'>
                    {title}
                </h3>
                <div className='flex sm:text-base'>
                    <Reserve/>
                </div>
            </div>
        </div>
    )
}

export const TravelDirections = () => {
    const {t} = useTranslation()
    // Пример данных
    const directions = [
        {
            id: 1,
            title: t('travel.cards.1'),
            imageUrl:
                'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
            columns: "1 / 3",
            rows: "1 / 1"
        },
        {
            id: 2,
            title: t('travel.cards.2'),
            imageUrl:
                'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
            columns: "3 / 3",
            rows: "1 / 1"
        },
        {
            id: 3,
            title: t('travel.cards.3'),
            imageUrl:
                'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
            columns: "4 / 4",
            rows: "1 / 1",
        },
        {
            id: 4,
            title: t('travel.cards.4'),
            imageUrl:
                'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
            columns: "5 / 5",
            rows: "1 / 1",
        },
        {
            id: 1,
            title: t('travel.cards.5'),
            imageUrl:
                'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
            columns: "1 / 1",
            rows: "2 / 2"
        },
        {
            id: 2,
            title: t('travel.cards.6'),
            imageUrl:
                'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
            columns: "2 / 2",
            rows: "2 / 2"
        },
        {
            id: 3,
            title: t('travel.cards.7'),
            imageUrl:
                'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
            columns: "3 / 3",
            rows: "2 / 2",
        },
        {
            id: 4,
            title: t('travel.cards.8'),
            imageUrl:
                'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
            columns: "4 / 6",
            rows: "2 / 2",
        },
        // Добавьте еще 8 карточек
    ]

    return (
        <section id='trip'>
            <Container>
                <h2 className='font-medium sm:text-5xl text-4xl mb-5'>{t('travel.title')}</h2>

                <div className='grid lg:grid-cols-5 lg:gap-5 lg:grid-rows-2 grid-cols-2'>
                    {directions.map((direction, index) =>
                        <Card
                            key={index}
                            {...direction}
                        />
                    )}
                </div>
            </Container>
        </section>
    )
}
