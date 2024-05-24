const express = require('express');

const mysql = require('mysql');

const cors = require('cors');

const app = express();

const jwt = require('jsonwebtoken')

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tiendahongos"
})  


app.delete('/producto/:id', async(req, res)=>{
    const sql = "DELETE FROM PRODUCTO  WHERE ID_PRODUCTO = ?";

    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.put('/producto/:id', async(req, res)=>{
    const sql = "UPDATE PRODUCTO SET  NOMBRE = ? WHERE ID_PRODUCTO = ?";
    const values = [
        req.body.NOMBRE
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO usuario (`ID_USUARIO`,`NOMBRE_USUARIO`,`EMAIL`,`PASSW`) VALUES (?,?,?,?)";
    const values = [
        req.body.ID_USUARIO,
        req.body.NOMBRE_USUARIO,
        req.body.EMAIL,
        req.body.PASSW
    ]
    /* const NOMBRE_USUARIO = req.body.NOMBRE_USUARIO;

    // Verifica si el nombre de usuario está presente y no es nulo
    if (!NOMBRE_USUARIO) {
        return res.status(400).send('El nombre de usuario es requerido');
    } */
    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err)
            return res.json("Error")
           
        }
      /*   console.log(result) */
        
        return res.json(result);
    })
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM USUARIO WHERE `EMAIL` = ? AND `PASSW` = ?";

    db.query(sql, [req.body.EMAIL, req.body.PASSW], (err, data) => {
        if (err) {
            return res.json("Error")
        }
        if (data.length >= 0) {
            const email = req.body.EMAIL;
            console.log(email)
            const id = data.ID_USUARIO;
            const token = jwt.sign({ id }, "jwtSecretKey", { expiresIn: 300 })
            return res.json({ Login: true, token, email:req.body.email, data });
        } else {
            
            return res.json("Faile");

        }
    })
});

app.get('/usuario', (req, res) => {
    db.query('SELECT * FROM USUARIO ', (err, result) => {
        if (err) {
            console.error('Error al obtener productos desde MySQL:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            res.json(result);
            console.log(result)

        }
    });
});

app.get('/order', (req, res) => {
    db.query('SELECT * FROM VENTA', (err, result) => {
        if (err) {
            console.error('Error al obtener productos desde MySQL:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            res.json(result);
            console.log(result)

        }
    });
});

app.get('/producto', (req, res) => {
    db.query('SELECT * FROM PRODUCTO', (err, result) => {
        if (err) {
            console.error('Error al obtener productos desde MySQL:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            res.json(result);
            console.log(result)

        }
    });
});

app.listen(8081, () => {
    console.log("listening");
})