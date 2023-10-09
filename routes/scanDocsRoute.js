const express = require("express")
const router = express.Router()
const upload = require("../middlewares/multerMiddleware")
const documentHandler = require("../controllers/documentController")

router.post("/DOH-PEME-LB", upload.array("document"), (req, res) => {
    const documentBuffers = req.files?.map((file) => {
        return file.buffer
    })

    // handle the file using documentHandler.dpl(documentBuffers) here

    res.send("Result")
})

router.post("/DOH-PEME-SB", upload.array("document"), (req, res) => {
    const documentBuffers = req.files?.map((file) => {
        return file.buffer
    })
    
    // handle the file using documentHandler.dps(documentBuffers) here

    res.send("Result")
})

router.post("/DOH-PEMER-LB", upload.array("document"), (req, res) => {
    const documentBuffers = req.files?.map((file) => {
        return file.buffer
    })
    
    // handle the file using documentHandler.dprl(documentBuffers) here

    res.send("Result")
})

router.post("/DOH-PEMER-SB", upload.array("document"), (req, res) => {
    const documentBuffers = req.files?.map((file) => {
        return file.buffer
    })
    
    // handle the file using documentHandler.dprs(documentBuffers) here

    res.send("Result")
})

router.post("/MFOWS-Annex_I-HIVST", upload.array("document"), (req, res) => {
    const documentBuffers = req.files?.map((file) => {
        return file.buffer
    })
    
    // handle the file using documentHandler.mai(documentBuffers) here

    res.send("Result")
})

router.post("/MFOWS-Annex_G-Psychological_Evaluation_Form", upload.array("document"), (req, res) => {
    const documentBuffers = req.files?.map((file) => {
        return file.buffer
    })
    
    // handle the file using documentHandler.magef(documentBuffers) here
 
    res.send("Result")
})

module.exports = router