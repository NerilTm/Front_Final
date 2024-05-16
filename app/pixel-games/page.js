"use client"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hook";
import { Preloader } from "../components/Preloader/Preloader";

export default function Pixel() {
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
    return (
        <main className="main-inner"> 
            {pixelGames ? (
                <CardsListSection id="pixel" title="Пиксельные" data={pixelGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}
