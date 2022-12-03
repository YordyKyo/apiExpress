import{pool} from '../db.js'

export const getClientes = async(req,res)=>{
    try {
        const[rows] = await pool.query('select * from cliente')
        res.json(rows)
    } catch (error) {
        return res.send('Hay un error')
    }
}

export const getCliente = async(req,res)=>{
    try {
        const[rows] = await pool.query('select * from cliente where idclientes=?'
        ,req.params.id)
        if(rows.length<=0)
        return res.send('Cliente no Encontrado')
        res.json(rows)
    } catch (error) {
        return res.send('Hay un error')
    }
}

export const postClientes = async(req,res)=>{
    const {ci,nombre,appaterno,apmaterno,direccion,celular,foto} = req.body
    try {
        const[rows] = await pool.query
        ('insert into cliente(ci,nombre,appaterno,apmaterno,direccion,celular,foto) values(?,?,?,?,?,?,?)',
        [ci,nombre,appaterno,apmaterno,direccion,celular,foto])
        res.json(rows)
    } catch (error) {
        return res.send('Hay un error')
    }
}

export const putClientes = (req,res)=>{
    res.send('Modificando Datos del Cliente desde Controllers')
}

export const patchClientes = async(req,res)=>{
    const {id} = req.params
    const {ci,nombre,appaterno,apmaterno,direccion,celular,foto} = req.body
    try {
        const[rows] = await pool.query(
    'update cliente set ci = IFNULL(?,ci),nombre=IFNULL(?,nombre),appaterno=IFNULL(?,appaterno),apmaterno=IFNULL(?,apmaterno),direccion=IFNULL(?,direccion),celular=IFNULL(?,celular),foto=IFNULL(?,foto) where idclientes=?'
        ,[ci,nombre,appaterno,apmaterno,direccion,celular,foto,id])
        if(rows.affectedRows === 0)
        return res.send('Cliente no Encontrado')
        res.json(rows)
    } catch (error) {
        return res.send('Hay un error')
    }
}

export const deleteClientes = async(req,res)=>{
    try {
        const[rows] = await pool.query('delete from cliente where idclientes=?'
        ,req.params.id)
        if(rows.affectedRows===0)
        return res.send('Cliente no Encontrado')
        res.json(rows)
    } catch (error) {
        return res.send('Hay un error')
    }
}