const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Menggunakan Standard Connection String (Tanpa SRV)
const MONGO_URI = "mongodb://diditseptian220_db_user:bapak123@cluster0-shard-00-00.2yaptlp.mongodb.net:27017,cluster0-shard-00-01.2yaptlp.mongodb.net:27017,cluster0-shard-00-02.2yaptlp.mongodb.net:27017/phunk_film?ssl=true&replicaSet=atlas-2yaptlp-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(MONGO_URI)
    .then(() => console.log("Berhasil terhubung ke MongoDB Atlas!"))
    .catch((err) => console.error("Koneksi database gagal:", err));

// Schema & Model User
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Endpoint Register
app.post('/api/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Username sudah terdaftar!" });
        }
        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ success: true, message: "Registrasi berhasil dan tersimpan di Database!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Terjadi kesalahan server", error: error.message });
    }
});

// Endpoint Login
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ success: false, message: "Username atau password salah!" });
        }
        res.json({ success: true, message: "Login berhasil!", username: user.username });
    } catch (error) {
        res.status(500).json({ success: false, message: "Terjadi kesalahan server", error: error.message });
    }
});

// Menyalakan Server
app.listen(PORT, () => {
    console.log(`Server backend berjalan di http://localhost:${PORT}`);
});