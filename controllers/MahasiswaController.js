const Mahasiswa = require("../models/Mahasiswa.js")
const db = require("../config/database")

const findAllMahasiswas = async() => {
    return await Mahasiswa.findAll().then(res => {
        return res
    })
}

const deleteMahasiswa = async(id) => {
    return await Mahasiswa.destroy({
        where: { id: id }
    }).then(num => {
        return num
    })
}

const AddMahasiswa = async(data) => {
    return await Mahasiswa.create(data).then(res => {
        return res
    })
}

const findMahasiswa = async(id) => {
    return await Mahasiswa.findByPk(id).then(res => {
        return res
    })
}

const updateMahasiswa = async(data) => {
    return await Mahasiswa.update(data, {
        where: { id: data.Id }
    }).then(num => {
        return num
    })
}

module.exports = {
    findAllMahasiswas,
    deleteMahasiswa,
    AddMahasiswa,
    findMahasiswa,
    updateMahasiswa
}