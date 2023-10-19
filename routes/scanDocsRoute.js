const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerMiddleware");
const documentHandler = require("../controllers/documentController");

router.post("/DOH-PEME-LB", upload.array("document"), (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	// handle the file using documentHandler.dpl(documentBuffers) here

	res.send("Result");
});

router.post("/DOH-PEME-SB", upload.array("document"), (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	const result = documentHandler.dps(documentBuffers);

	res.json({
		result: result,
	});
});

router.post("/DOH-PEMER-LB", upload.array("document"), (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	// handle the file using documentHandler.dprl(documentBuffers) here

	res.send("Result");
});

router.post("/DOH-PEMER-SB", upload.array("document"), (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	// handle the file using documentHandler.dprs(documentBuffers) here

	res.send("Result");
});

router.post("/MFOWS-Annex_I-HIVST", upload.array("document"), (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	// handle the file using documentHandler.mai(documentBuffers) here

	res.send("Result");
});

router.post(
	"/MFOWS-Annex_G-Psychological_Evaluation_Form",
	upload.array("document"),
	(req, res) => {
		const documentBuffers = req.files?.map((file) => {
			return file.buffer;
		});

		const result = documentHandler.magef(documentBuffers);

		res.json({
			result: result,
		});
	}
);

// Input : Document buffers
/* Output : 
    [
        {
            documentPage: int
            extractedWord: string[]
        }
    ]
*/
router.post(
	"/extract_document_texts",
	upload.array("document"),
	async (req, res) => {
		const documentBuffers = req.files?.map((file) => {
			return file.buffer;
		});

		const result = await documentHandler.extractWords(documentBuffers);
		console.log(result);
		res.json({
			result: result,
		});
	}
);

router.post("store_document", async (req, res) => {
	const documentKeyValuePairs = req.body.data
	const fileType = req.body.fileType

	try {
		const result = await documentHandler.readCSVToJSONAndStore("../csv", fileType, documentKeyValuePairs)
		res.json({
			status: "Success",
			result: result
		})
	} catch (err) {
		res.status(500).json({
			status: "Failed"
		})
	}
})

module.exports = router;
