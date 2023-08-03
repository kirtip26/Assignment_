const fs = require('fs');
const util = require('util');
const unlinkAsync = util.promisify(fs.unlink);

async function removeFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`Successfully removed the file: ${filePath}`);
  } catch (error) {
    console.error(`Error removing the file: ${error}`);
  }
}

const fileToDelete = 'G:/Kirti/Semester 7/Full stack/Assignment 1/delete.txt'; // Replace with the path of the file you want to delete

removeFile(fileToDelete);
