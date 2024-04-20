export async function getDataImg(says: string) {
	try {
		const data = await fetch('https://cataas.com/cat/says/' + says).then((res) => res.url);
		return data;
	} catch (error) {
		console.error(error);
	}
}

export default getDataImg;
