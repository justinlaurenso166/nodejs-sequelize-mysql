const express = require("express")
const router = express.Router()
const Mahasiswa = require("../controllers/MahasiswaController")

router.get('/GetMahasiswas', async(req, res) => {
    try {
        let data = await Mahasiswa.findAllMahasiswas()
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(404).send("No data found")
        }
    } catch (error) {
        res.status(500).send(error || "Error Occured")
    }
})

router.post('/DeleteStudent', async(req, res) => {
    try {
        let id = req.body.Id;
        let delete_mahasiswa = await Mahasiswa.deleteMahasiswa(id)

        if (delete_mahasiswa == 1) {
            res.status(200).send(`Student data with Id ${id} deleted successfully`)
        } else {
            res.status(404).send(`No data found for Id ${id}`)
        }
    } catch (error) {
        res.status(500).send(error || "Error Occured")
    }
})

router.post('/AddStudent', async(req, res) => {
    try {

        let data = {
            Nama: req.body.Nama,
            Age: req.body.Age
        }
        let add_mahasiswa = await Mahasiswa.AddMahasiswa(data)

        if (!data.Nama && !data.Age) {
            if (add_mahasiswa) {
                res.status(200).send((add_mahasiswa.Id).toString())
            } else {
                res.status(404).send("Error Occured when create data")
            }
        }
    } catch (error) {
        res.status(500).send(error || "Error Occured")
    }
})

router.post("/GetStudent", async(req, res) => {
    try {
        let id = req.body.Id

        let get_mahasiswa = await Mahasiswa.findMahasiswa(id)
        if (get_mahasiswa) {
            res.status(200).send(get_mahasiswa)
        } else {
            res.status(404).send(`No data found for id ${id}`)
        }
    } catch (error) {
        res.status(500).send(error || "Error Occured")
    }
})

router.post('/UpdateStudent', async(req, res) => {
    try {
        let data = {
            Id: req.body.Id,
            Nama: req.body.Nama,
            Age: req.body.Age
        }

        let update_mahasiswa = await Mahasiswa.updateMahasiswa(data)

        if (update_mahasiswa == 1) {
            res.status(200).send("Data was updated successfully")
        } else {
            res.status(404).send("Cannot update Mahasiswa with id " + data.Id)
        }

    } catch (error) {
        res.status(500).send(error || "Error Occured")
    }
})

module.exports = router