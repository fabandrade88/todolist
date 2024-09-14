const getAll = (req, res) => {
    return res.status(200).json({message: 'controller funcionando'})

}

module.exports = {
    getAll
}