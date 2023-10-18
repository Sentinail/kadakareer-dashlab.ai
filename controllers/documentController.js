/*
    Read Me!!!
    All Methods/Function here must input an array of documentBuffer and must return key-value pairs of the specified document

    E.g :

    Input: 
    ( [buffer1, buffer2] )

    Output : 
    [[name: "John"], [surname: "Doe"], [age: "25"], [sex: "male"]]
*/
const result = require("../test_documents/MFOWS-Annex_G-Psychological_Evaluation Form_Pg1.json");
const result2 = require("../test_documents/MFOWS-Annex_G-Psychological_Evaluation Form_Pg2.json");
const result3 = require("../test_documents/HIVST.json");
const textractUtils = require("../utils/textractUtils");

const {
  TextractClient,
  AnalyzeDocumentCommand,
} = require("@aws-sdk/client-textract");

const client = new TextractClient({
  region: "us-east-1",
});

const dpl = async (documentBuffers) => {
  // Implement logic here
  return null;
};

const dps = (documentBuffers) => {
  // Implement logic here
  return null;
};

const dprl = async (documentBuffers) => {
  // Implement logic here
  return null;
};

const dprs = async (documentBuffers) => {
  // Implement logic here
  return null;
};

const mai = async (documentBuffers) => {
  // Implement logic here
  const extractionResults = [];

  textractResults.forEach((textractResult, index) => {
    const keyValues = textractUtils.extractKeyValuePairs(textractResult);

    extractionResults.push({
      page: index + 1,
      key_values: keyValues,
    });
  });

  return extractionResults;
};

const magef = async (documentBuffers) => {
  const textractResults = [];

  documentBuffers.forEach((documentBuffer) => {
    const command = new AnalyzeDocumentCommand({
      Document: {
        Bytes: documentBuffer,
      },
      FeatureTypes: ["TABLES", "FORMS", "SIGNATURES", "LAYOUT"],
    });

    client.send(command).then((result) => {
      textractResults.push(result);
    });
  });

  const extractionResults = [];
  textractResults.forEach((textractResult, index) => {
    const keyValues = textractUtils.extractKeyValuePairs(textractResult);
    const tables = textractUtils.getTableValues(textractResult);

    extractionResults.push({
      page: index + 1,
      key_values: keyValues,
      tables: tables,
    });
  });

  return extractionResults;
};

// Input : documentBuffers
/* Output : 
    [
        {
            document: int
            extractedWord: string[]
        }
    ]
*/

const extractWords = async (documentBuffers) => {
  const textractResult = await textractUtils.sendRequestToTextractClient(
    documentBuffers,
    AnalyzeDocumentCommand,
    client
  );

  let blocks = textractResult.map((res) => res.Blocks);

  let a = blocks.map((e) =>
    e.filter((z) => z.BlockType === "WORD").map((e) => e.Text)
  );

  let index = 0;
  a = a.map((e) => {
    index++;
    return { documentPage: index, extractedWord: e };
  });

  return a;
};

module.exports = {
  dpl,
  dps,
  dprl,
  dprs,
  mai,
  magef,
  extractWords,
};
