const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ====================================
// MIDDLEWARE
// ====================================

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ====================================
// DATABASE CONNECTION
// ====================================

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
});

// ====================================
// API ROUTES - CRUD OPERATIONS
// ====================================

// CREATE - POST /api/students
app.post('/api/students', async (req, res) => {
    try {
        const { name, email, age, major } = req.body;

        // Validation
        if (!name || !email || age === undefined) {
            return res.status(400).json({
                error: 'Invalid request body',
                details: 'name, email, and age are required'
            });
        }

        const query = `
            INSERT INTO students (name, email, age, major)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;

        const result = await pool.query(query, [name, email, age, major || null]);
        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error('Error creating student:', error);
        
        // Handle unique constraint violation (duplicate email)
        if (error.code === '23505') {
            return res.status(409).json({
                error: 'Email already exists',
                details: error.message
            });
        }

        res.status(500).json({
            error: 'Database error',
            details: error.message
        });
    }
});

// READ ALL - GET /api/students
app.get('/api/students', async (req, res) => {
    try {
        const query = 'SELECT * FROM students ORDER BY id ASC;';
        const result = await pool.query(query);
        res.status(200).json(result.rows);

    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({
            error: 'Database error',
            details: error.message
        });
    }
});

// READ BY ID - GET /api/students/:id
app.get('/api/students/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Validation
        if (!id || isNaN(id)) {
            return res.status(400).json({
                error: 'Invalid student ID',
                details: 'ID must be a valid number'
            });
        }

        const query = 'SELECT * FROM students WHERE id = $1;';
        const result = await pool.query(query, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Student not found'
            });
        }

        res.status(200).json(result.rows[0]);

    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).json({
            error: 'Database error',
            details: error.message
        });
    }
});

// UPDATE (PUT) - PUT /api/students/:id
app.put('/api/students/:id', async (req, res) => {

});

// UPDATE (PATCH) - PATCH /api/students/:id
app.patch('/api/students/:id', async (req, res) => {

});

// DELETE - DELETE /api/students/:id
app.delete('/api/students/:id', async (req, res) => {

});



// ====================================
// 404 HANDLER
// ====================================

app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: `Route ${req.method} ${req.path} does not exist`
    });
});

// ====================================
// ERROR HANDLER
// ====================================

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
});

// ====================================
// START SERVER
// ====================================

app.listen(PORT, () => {
    console.log('\nAccess the web interface at http://localhost:' + PORT);
});

// Handle graceful shutdown
process.on('SIGINT', async () => {
    console.log('\nShutting down gracefully...');
    await pool.end();
    process.exit(0);
});
