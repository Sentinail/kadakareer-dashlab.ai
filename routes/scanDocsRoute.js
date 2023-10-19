const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerMiddleware");
const documentHandler = require("../controllers/documentController");

router.post("/DOH-PEME-LB", upload.array("document"), async (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	try {
		const result = await documentHandler.dpl(documentBuffers);

		res.json({
			status: "Success",
			result: result
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			status: "Failed"
		})
	}
});

router.post("/DOH-PEME-SB", upload.array("document"), async (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	try {
		const result = await documentHandler.dps(documentBuffers);

		res.json({
			status: "Success",
			result: result
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			status: "Failed"
		})
	}
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

router.post("/MFOWS-Annex_I-HIVST", upload.array("document"), async (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	try {
		const result = await documentHandler.mai(documentBuffers);

		res.json({
			status: "Success",
			result: result
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			status: "Failed"
		})
	}
});

router.post("/MFOWS-Annex_G-Psychological_Evaluation_Form", upload.array("document"), async (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	try {
		const result = await documentHandler.magef(documentBuffers);

		res.json({
			status: "Success",
			result: result
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			status: "Failed"
		})
	}
});

router.post("/extract_document_texts", upload.array("document"), async (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	try {
		const result = await documentHandler.extractWords(documentBuffers);
		res.json({
			status: "Success",
			result: result
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			status: "Failed"
		})
	}
});

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
