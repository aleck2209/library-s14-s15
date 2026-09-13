import express from "express"
import memberRoutes from "./module/member/member.route.js"

const app = express()

app.use(express.json())

// Routes
app.use('/api/members', memberRoutes);

export default app