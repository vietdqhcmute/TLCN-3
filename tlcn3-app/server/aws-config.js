const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

aws.config.update({
  secretAccessKey: "ZSfVgX5r7hOn8F3XFO0ypiAkJu60ht/VIdQuf+cp",
  accessKeyId: "AKIAIAM5U5LF5DGKJ42Q",
  region: "us-east-1" // region of your bucket
});
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "nodejs-server-image",
    acl: "public-read-write",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
