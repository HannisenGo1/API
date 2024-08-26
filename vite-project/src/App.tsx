// import { useState } from 'react'
import './App.css'
import { getPirates } from './data/getPirates'
import { useState } from 'react'
import { ApiData } from './data/getPirates';

function App() {
	const [characters, setCharacters] = useState<ApiData | null>(null);
	const [loadingData, setLoadingData] = useState<boolean>(false);
	const [errorData, setErrorData] = useState<string | null> (null);  

	const handleGet = async () => {
		setLoadingData(true)
		setErrorData(null)
		try {
			const data = await getPirates()
			console.log('Data from API:', data)
			loadingData
			setCharacters(data)
			// TODO: visa datan i appen
		}
		catch(error) {
			const e: Error = error as Error
			console.log('API failed with error: ', e.message)
			setErrorData('failed to fetch data')
		} finally{
		setLoadingData(false)	
		}
	}
	
	return (
		<div className="app">
			<header>
				<h1> Fullstack Pirates </h1>
			</header>
			          <main>
                <button onClick={handleGet}>Arr mateys</button>
              
            </main>
        </div>
    );
	
}

export default App
