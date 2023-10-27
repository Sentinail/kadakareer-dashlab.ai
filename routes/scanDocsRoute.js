const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerMiddleware");
const documentHandler = require("../controllers/documentController");
const converter = require("json-2-csv");
const path = require("path");

router.post("/DOH-PEME-LB", upload.array("document"), async (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	try {
		const result = await documentHandler.dpl(documentBuffers);

		res.json({
			status: "Success",
			result: result,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "Failed",
		});
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
			result: result,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "Failed",
		});
	}
});

router.post("/DOH-PEMER-LB", upload.array("document"), async (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	try {
		const result = await documentHandler.dprl(documentBuffers);

		res.json({
			status: "Success",
			result: result,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "Failed",
		});
	}
});

router.post("/DOH-PEMER-SB", upload.array("document"), async (req, res) => {
	const documentBuffers = req.files?.map((file) => {
		return file.buffer;
	});

	try {
		const result = await documentHandler.dprs(documentBuffers);

		res.json({
			status: "Success",
			result: result,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "Failed",
		});
	}
});

router.post(
	"/MFOWS-Annex_I-HIVST",
	upload.array("document"),
	async (req, res) => {
		const documentBuffers = req.files?.map((file) => {
			return file.buffer;
		});

		try {
			const result = await documentHandler.mai(documentBuffers);

			res.json({
				status: "Success",
				result: result,
			});
		} catch (err) {
			console.log(err);
			res.status(500).json({
				status: "Failed",
			});
		}
	}
);

router.post(
	"/MFOWS-Annex_G-Psychological_Evaluation_Form",
	upload.array("document"),
	async (req, res) => {
		const documentBuffers = req.files?.map((file) => {
			return file.buffer;
		});

		try {
			const result = await documentHandler.magef(documentBuffers);

			res.json({
				status: "Success",
				result: result,
			});
		} catch (err) {
			console.log(err);
			res.status(500).json({
				status: "Failed",
			});
		}
	}
);

router.post(
	"/extract_document_texts",
	upload.array("document"),
	async (req, res) => {
		const documentBuffers = req.files?.map((file) => {
			return file.buffer;
		});

		try {
			const result = await documentHandler.extractWords(documentBuffers);
			res.json({
				status: "Success",
				result: result,
			});
		} catch (err) {
			console.log(err);
			res.status(500).json({
				status: "Failed",
			});
		}
	}
);

router.post("/store_document", async (req, res) => {
	const body = req.body;
	const documentKeyValuePairs = body.data;
	const fileType = body.fileType;

	try {
		const result = await documentHandler.readJSONToCSVAndStore(
			path.join(__dirname, "../", "csv"),
			fileType,
			[documentKeyValuePairs]
		);
		res.json({
			status: "Success",
			result: result,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "Failed",
		});
	}
});

router.post("/download_zipped_csv", async (req, res) => {
	const { fileName } = req.body;

	try {
		await documentHandler.csvFileZipper(fileName, res, "password");
	} catch (err) {
		console.error(err);
		res.status(500).send("Error generating or sending the zip file.");
	}
});

module.exports = router;
