const express = require(`express`);
const app = express();
const mysql = require(`mysql2`);

const pool = mysql.createPool(
    {
        host: ` localhost`,
        user: `root`,
        password: ``,
        database: `konyvtar_db`,
        port: 3307

    }
);

app.use(express.json())




app.get ('/konyvek', (res, req)=>{
    res.json("SELECT cim, mufaj_id, kiadas_ev FROM `konyvek` ORDER BY kiadas_ev;")
}
)

app.get ('/konyvek/elerheto', (res, req)=>{
    res.json("SELECT cim FROM konyvek WHERE kolcsonozheto = 1 AND kiadas_ev < 2000;")
}
)

app.get ('/mufajok/statisztika', (res, req)=>{
    res.json("SELECT cim, kiadas_ev, oldalszam  FROM konyvek WHERE oldalszam > 400 ORDER BY oldalszam DESC;")
}
)

app.get ('/konyvek/hosszuak', (res, req)=>{
    res.json("SELECT cim, kiadas_ev, oldalszam  FROM konyvek WHERE oldalszam > 400 ORDER BY oldalszam DESC;")
}
)

app.listen((3000), ()=>{
    console.log("http://localhost:3307")
});


      
       

