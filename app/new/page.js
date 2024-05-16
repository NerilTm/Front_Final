"use client"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hook";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsList } from "../components/CardsList/CardsList";

export default function New() {
    const newGames = useGetDataByCategory(endpoints.games, "new");
    return (
        <main className="main-inner">
            {newGames ? (
                <CardsListSection id="new" title="Новые" data={newGames} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}