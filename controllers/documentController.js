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
    const textractResults = []
    
    documentBuffers.forEach((documentBuffer) => {
        const command = new AnalyzeDocumentCommand({
            Document: {
                Bytes: documentBuffer,
            },
            FeatureTypes: ["TABLES", "FORMS", "SIGNATURES", "LAYOUT"]
        })

        client.send(command).then((result) => {
            textractResults.push(result)
        })
    })

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
    
    return extractionResults
}

// Input : documentBuffers
/* Output : 
    [
        {
            page: int
            extractedWord: string[]
        }
    ]
*/
const extractWords = (documentBuffers) => {
    const textractResult = [result, result2]

    textractResult.forEach(result => {
        console.log(result)
    })
}

extractWords()

module.exports = {
    dpl,
    dps,
    dprl,
    dprs,
    mai,
    magef
}
