"use client"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hook";
import { Preloader } from "../components/Preloader/Preloader";

export default function Shooter() {
    const shooterGames = useGetDataByCategory(endpoints.games, "shooter");
    return (
        <main className="main-inner">
            {shooterGames ? (
                <CardsListSection id="shooter" title="Шутеры" data={shooterGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}