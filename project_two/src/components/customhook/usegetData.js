import { useEffect } from "react"

function usegetData(urlData,defaultValue) {
    const [data, setData] = useState(defaultValue)
    useEffect(() => {
        fetchData();
    },[])
    return [data,setData]
}
async function fetchData(){
    const url = `https://free-nba.p.rapidapi.com${urlData}page=0&per_page=25`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '863abdbfc6msha614011caeab561p1f2c34jsnbe8fe8b045d4',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	setData(result.data);
} catch (error) {
	console.error(error);
}
}

export default usegetData;