const AdmZip = require('adm-zip');

function extractZip(zipFilePath, extractToPath) {
  try {
    const zip = new AdmZip(zipFilePath);
    zip.extractAllTo(extractToPath, /*overwrite*/true);
    console.log(`Successfully extracted the zip file to ${extractToPath}`);
  } catch (error) {
    console.error(`Error extracting the zip file: ${error}`);
  }
}

const zipFileToExtract = 'compressed_folder.zip'; 
const extractPath = 'G:/Kirti/Semester 7/Full stack/Zip'; 

extractZip(zipFileToExtract, extractPath);

