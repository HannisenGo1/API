export interface Character {
    id: number;
    name: string;
    films: string[];
    videoGames: string[];
    sourceUrl: string;
}

export interface ApiData {
    characters: Character[];
}

async function getPirates(): Promise<ApiData> {



	const response: Response = await fetch('https://api.disneyapi.dev/character?films=Pirates of the Caribbean')
 if (!response.ok) {
        throw new Error('Network response was not okej!!!');
    }
    
    const data: ApiData = await response.json();
    return data;
}
	
	// Obs! Vi är inte garanterade att få "ApiData"
	// på onsdag kommer vi att se hur vi kan validera datan
	


export { getPirates }
