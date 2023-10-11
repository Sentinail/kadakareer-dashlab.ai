/*
    Read Me!!!
    All Methods/Function here must input an array of documentBuffer and must return key-value pairs of the specified document

    E.g :

    Input: 
    ( [buffer1, buffer2] )

    Output : 
    [[name: "John"], [surname: "Doe"], [age: "25"], [sex: "male"]]
*/

const result = require("../test_documents/MFOWS-Annex_G-Psychological_Evaluation Form_Pg1.json")
const result2 = require("../test_documents/MFOWS-Annex_G-Psychological_Evaluation Form_Pg2.json")

const textractUtils = require("../utils/textractUtils")

const {
	TextractClient,
	AnalyzeDocumentCommand,
} = require("@aws-sdk/client-textract");

const client = new TextractClient({
	region: "us-east-1",
});

const dpl = (documentBuffers) => {
    // Implement logic here
    return null
}

const dps = (documentBuffers) => {
    // Implement logic here
    return null
}

const dprl = (documentBuffers) => {
    // Implement logic here
    return null
}

const dprs = (documentBuffers) => {
    // Implement logic here
    return null
}

const mai = (documentBuffers) => {
    // Implement logic here
    return null
}

const magef = (documentBuffers) => {
    // Get textractResult using textract

    // Test textractResults
    const textractResults = [result, result2]

    // Array of Textract Results
    const extractionResults = []

    textractResults.forEach((textractResult, index) => {
        const keyValues = textractUtils.extractKeyValuePairs(textractResult)
        const tables = textractUtils.getTableValues(textractResult)

        extractionResults.push({
            page: index + 1,
            key_values: keyValues,
            tables: tables
        })
    })
    
    console.log(extractionResults)
}

magef()

module.exports = {
    dpl,
    dps,
    dprl,
    dprs,
    mai,
    magef
}
