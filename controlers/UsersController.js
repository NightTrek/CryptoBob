const getcon = require('./../config/connection')



module.exports = {
findAll: async function(req,res){
    let con = await getcon();
    const response = await con.query('SELECT * FROM wishes')
    return new Promise( (resolve, reject) => {
        if(response){
            resolve(response[0])
        }
        else{
            let error  = {
                msg: "findAll promise rejected"
            }
            reject(error)
        }
    });
},
deleteByID: async function(req, res){
    let con = await getcon();
    const response = await con.query("DELETE FROM wishes WHERE id=?", req.params.id)
    res.json(response)

},
findByID: async function(req,res){
    let con = await getcon();
    const response = await con.query(`SELECT * FROM wishes WHERE id="${req.params.id}"`)
    res.json(response)
},
postWish: async function(req,res){
    let con = await getcon();
    const response = await con.query(`INSERT INTO wishes(wish) VALUES("${req.params.id}")`)
    res.json(response)
}
}