export async function getDataTxt() {
	try {
		const data = await fetch('https://catfact.ninja/fact').then((res) => res.json());
		return data.fact;
	} catch (error) {
		console.error(error);
	}
}

export default getDataTxt;
