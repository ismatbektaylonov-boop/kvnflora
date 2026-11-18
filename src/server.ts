import dotenv from 'dotenv'
import mongoose from 'mongoose'
import app from './app'
dotenv.config()

mongoose
	.connect(process.env.MONGO_URI as string, {})
	.then(data => {
		console.log('MongoDB connection succeed')
		const PORT = process.env.PORT ?? 7001
		app.listen(PORT, () =>
			console.log(`Server is running on http://localhost:${PORT}`),
		)
	})
	.catch(err => console.log('ERROR on connection MongoDB', err))
