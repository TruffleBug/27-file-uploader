const { body, validationResult } = require('express-validator');
const multer = require('multer');
const upload = multer({ dest: './uploads/ '});

const validateFile = [
    body('fileName')
        .trim()
        .notEmpty()
        .withMessage('Please include a file name.'),
    body('uploadedFile')
        .notEmpty()
        .withMessage('Please include a file.')
]

exports.uploadFileGet = (req, res) => {
    res.render('upload', { title: 'Upload File' })
}

// ERRORS ARRAY IS NOT CLEARING EVERY TIME. NEVER REACHES CONSOLE.LOG
exports.uploadFilePost = [
    upload.single('uploadedFile'),
    validateFile,
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render('upload', { title: 'Upload File', errors: errors.array() })
        };
        console.log(req.file, req.body);
        res.send('File uploaded. (Placeholder)');
    }
];