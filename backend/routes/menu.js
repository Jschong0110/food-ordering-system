const express = require('express'); 

const pool = require('../config/database'); 

const router = express.Router(); 

  

// GET /api/menu - Get all menu items from database 

router.get('/', async (req, res) => { 

    try { 

        const result = await pool.query('SELECT * FROM menu_items WHERE available = true'); 

        res.json({ success: true, data: result.rows }); 

    } catch (error) { 

        console.error('Database error:', error); 

        res.status(500).json({ success: false, message: 'Database error' }); 

    } 

}); 

  

// GET /api/menu/:id - Get specific menu item 

router.get('/:id', async (req, res) => { 

    try { 

        const result = await pool.query('SELECT * FROM menu_items WHERE id = $1', [req.params.id]); 

         

        if (result.rows.length === 0) { 

            return res.status(404).json({ success: false, message: 'Menu item not found' }); 

        } 

         

        res.json({ success: true, data: result.rows[0] }); 

    } catch (error) { 

        console.error('Database error:', error); 

        res.status(500).json({ success: false, message: 'Database error' }); 

    } 

}); 

  

module.exports = router; 