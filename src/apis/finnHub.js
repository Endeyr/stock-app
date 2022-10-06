import axios from 'axios'

const apiKeyFinnhub = process.env.REACT_APP_FINNHUB_API_KEY

export default axios.create({
	baseURL: 'https://finnhub.io/api/v1',
	params: {
		token: apiKeyFinnhub,
	},
})
