'use client'
import { Banner } from './components/Banner/Banner.jsx';

import { Promo } from './components/Promo/Promo.jsx';

import { useGetDataByCategory } from './api/api-hook.js';
import { endpoints } from './api/config.js';
import { Preloader } from './components/Preloader/Preloader.jsx';
import { CardsListSection } from './components/CardsListSection/CardsListSection.jsx';
import { CardsList } from './components/CardsList/CardsList.jsx';

export default function Home() {
    const popularGames = useGetDataByCategory(endpoints.games, "popular"); 
    const newGames = useGetDataByCategory(endpoints.games, "new");
    return (
        <main className="main">
            <Banner />
            {
                (popularGames && newGames) ? (
                    <>
                        <CardsListSection id="popular" title="Популярное" data={popularGames} type="slider"/>
                        <CardsListSection id="new" title="Новинки" data={newGames} type="slider"/>
                    </>
                ) : <Preloader />
            }
            <Promo />
        </main>
    );
};  

