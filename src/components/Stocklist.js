import { useEffect, useState } from 'react'
import finnHub from '../apis/finnHub'

export const Stocklist = () => {
	const [stock, setStock] = useState()
	const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN'])

	useEffect(() => {
		let isMounted = true
		const fetchData = async () => {
			const responses = []
			try {
				const responses = await Promise.all(
					watchList.map((stock) => {
						return finnHub.get('/quote', {
							params: {
								symbol: stock,
							},
						})
					})
				)

				const data = responses.map((response) => {
					return {
						data: response.data,
						symbol: response.config.params.symbol,
					}
				})
				console.log(data)
				if (isMounted) {
					setStock(data)
				}
			} catch (err) {}
		}
		fetchData()

		return () => (isMounted = false)
	}, [])

	return <div>Stock list</div>
}
