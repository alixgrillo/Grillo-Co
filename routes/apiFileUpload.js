
// var multer = require('multer');

module.exports = function (app, multer) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'grillo-and-co/src/images')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
      })
      
      var upload = multer({ storage: storage }).single('file');
      
      // app.use("/apiFile/upload", apiFileUpload)(app, upload);
      
      app.post('/upload',function(req, res) {
          //  console.log(req);
        upload(req, res, function (err) {
          console.log(err);
               if (err instanceof multer.MulterError) {
                 console.log("1st error");
                   return res.status(500).json(err)
               } else if (err) {
                 console.log("2nd error");
                   return res.status(500).json(err)
               }
          return res.status(200).send(req.file)
      
        })
      })

}


// module.exports = router;