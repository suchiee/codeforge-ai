import express from 'express'
import 'dotenv/config'
import pool from './config/database.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', async(req, res) => {
    try{
        const result = await pool.query('SELECT NOW()')

  res.json({ status: 'ok',
            message: 'CodeForge API is running',
            database: 'connected',
            databaseTime: result.rows[0].now,
   });
}
    catch (error) {
        console.error('Databse connection failed:', error)
        res.status(500).json({ status: 'error', message: 'Database connection failed' })
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})