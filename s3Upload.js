const s3FolderUpload = require('s3-folder-upload')

const directoryName = './public/build/'
// I strongly recommend to save your credentials on a JSON or ENV variables, or command line args
const credentials = {
  "accessKeyId": "0031170e64fcdbc0000000001",
  "secretAccessKey": "K003+JNV4LCsafnOhyhsXIiFsA+n89M",
  "endpoint": "s3.eu-central-003.backblazeb2.com",
  "region": "eu-central-003",
  "bucket": "ringtone"
}
const options = {
  useFoldersForFileTypes: false,
  useIAMRoleCredentials: false,
  uploadFolder: "build"
}
s3FolderUpload(directoryName, credentials, options)