const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

function zipFolder(folderPath, outputZipPath) {
  try {
    const zip = new AdmZip();

    const walkSync = (dir, fileList = []) => {
      fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
          fileList = walkSync(filePath, fileList);
        } else {
          fileList.push(filePath);
        }
      });
      return fileList;
    };

    const files = walkSync(folderPath);

    files.forEach(file => {
      const arcName = path.relative(folderPath, file);
      zip.addLocalFile(file, arcName);
    });

    zip.writeZip(outputZipPath);

    console.log(`Successfully created ${outputZipPath}`);
  } catch (error) {
    console.error(`Error creating zip file: ${error}`);
  }
}

const folderToCompress = 'G:/Kirti/Semester 7/Full stack/Assignment'; 
const outputZipFile = 'compressed_folder.zip';

zipFolder(folderToCompress, outputZipFile);
