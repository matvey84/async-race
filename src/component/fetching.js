import { secondSection } from "../ui/secondSection";


export async function getFirstFetching(){
	let url = 'http://localhost:3000'
 	let response =  await fetch(`${url}/garage`);
	let data = await response.json();
	console.log(data)
	secondSection(data)

  
}