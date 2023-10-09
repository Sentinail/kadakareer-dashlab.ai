/*
    Read Me!!!
    All Methods/Function here must input an array of documentBuffer and must return key-value pairs of the specified document

    E.g :

    Input: 
    ( [buffer1, buffer2] )

    Output : 
    [[name: "John"], [surname: "Doe"], [age: "25"], [sex: "male"]]
*/

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
    return null
}

module.exports = {
    dpl,
    dps,
    dprl,
    dprs,
    mai,
    magef
}
