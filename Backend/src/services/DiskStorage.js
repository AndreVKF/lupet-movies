const fs = require("fs")
const path = require("path")
const uploadConfig = require("../configs/upload")

class DiskStorage {
  async saveFile(file) {
    // rename or move files
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    )

    return file
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)

    try {
      // checks if file is open or corrupted
      await fs.promises.stat(filePath)
    } catch {
      return
    }
    // deletes file
    await fs.promises.unlink(filePath)
  }
}

module.exports = DiskStorage
