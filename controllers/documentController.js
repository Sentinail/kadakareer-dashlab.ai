/*
    Read Me!!!
    All Methods/Function here must input an array of documentBuffer and must return key-value pairs of the specified document

    E.g :

    Input: 
    ( [buffer1, buffer2] )

    Output : 
    [[name: "John"], [surname: "Doe"], [age: "25"], [sex: "male"]]
*/
const result = require("../test_documents/DOH-PEME-SB.json");
const result2 = require("../test_documents/MFOWS-Annex_G-Psychological_Evaluation Form_Pg2.json");
const result3 = require("../test_documents/HIVST.json");
const textractUtils = require("../utils/textractUtils");
const converter = require("json-2-csv")
const fs = require("fs")
const path = require("path")

const {
  TextractClient,
  AnalyzeDocumentCommand,
} = require("@aws-sdk/client-textract");

const client = new TextractClient({
  region: "us-east-1",
});

const dpl = async (documentBuffers) => {
  const textractResults = await textractUtils.sendRequestToTextractClient(
    documentBuffers,
    AnalyzeDocumentCommand,
    client
  );

  const extractionResults = [];


  textractResults.forEach((textractResult, index) => {
    const keyValues = textractUtils.extractKeyValuePairs(textractResult);
    const tables = textractUtils.extractDPLTableKeyValues(textractResult);

    extractionResults.push({
      page: index + 1,
      key_values: keyValues,
      tables: tables,
    });
  })

  return extractionResults;
};

const dps = async (documentBuffers) => {
  const textractResults = await textractUtils.sendRequestToTextractClient(
    documentBuffers,
    AnalyzeDocumentCommand,
    client
  );

  const extractionResults = [];

  textractResults.forEach((textractResult, index) => {
    const keyValues = textractUtils.extractKeyValuePairs(textractResult);
    const tables = textractUtils.extractDPSTableKeyValues(textractResult);

    extractionResults.push({
      page: index + 1,
      key_values: keyValues,
      tables: tables,
    });
  })

  return extractionResults;
};

const dprl = async (documentBuffers) => {
  const textractResults = await textractUtils.sendRequestToTextractClient(
    documentBuffers,
    AnalyzeDocumentCommand,
    client
  );

  const extractionResults = [];

  textractResults.forEach((textractResult, index) => {
    const keyValues = textractUtils.extractKeyValuePairs(textractResult);
    const tables = textractUtils.extractDPSTableKeyValues(textractResult);

    extractionResults.push({
      page: index + 1,
      key_values: keyValues,
      tables: tables,
    });
  })

  return extractionResults;
};

const dprs = async (documentBuffers) => {
  const textractResults = await textractUtils.sendRequestToTextractClient(
    documentBuffers,
    AnalyzeDocumentCommand,
    client
  );

  const extractionResults = [];

  textractResults.forEach((textractResult, index) => {
    const keyValues = textractUtils.extractKeyValuePairs(textractResult);
    const tables = textractUtils.extractDPSTableKeyValues(textractResult);

    extractionResults.push({
      page: index + 1,
      key_values: keyValues,
      tables: tables,
    });
  })

  return extractionResults;
};

const mai = async (documentBuffers) => {
  const textractResults = await textractUtils.sendRequestToTextractClient(
    documentBuffers,
    AnalyzeDocumentCommand,
    client
  );
  
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
  
  const textractResults = await textractUtils.sendRequestToTextractClient(
    documentBuffers,
    AnalyzeDocumentCommand,
    client
  );

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

const readJSONToCSVAndStore = async (fileDirectory, filename, jsonDocuments) => {
  try {
    const filePath = path.join(fileDirectory, filename);

    let existingCSV;
    let existingJSON = [];

    if (fs.existsSync(filePath)) {
      existingCSV = fs.readFileSync(filePath, 'utf-8');
      existingJSON = await converter.csv2json(existingCSV);
    }

    const newJSON = [...existingJSON, ...jsonDocuments];

    const updatedCSV = await converter.json2csv(newJSON);
    console.log(updatedCSV);

    fs.writeFileSync(filePath, updatedCSV, 'utf-8');
    console.log(`CSV data has been saved to ${filePath}`);
    return updatedCSV
  } catch (error) {
    console.error('Error while reading, converting, or saving CSV:', error);
  }
};

module.exports = {
  dpl,
  dps,
  dprl,
  dprs,
  mai,
  magef,
  extractWords,
  readJSONToCSVAndStore,
};
