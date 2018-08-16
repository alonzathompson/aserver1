const express = require('express');
const router = express.Router();
const send = require('../../utilities/sendmail');

router.route('/:contactFrom')
  .post((req, res) => {
    
    name = req.body.name;
    dEmail = req.body.email;
    from = req.params.contactFrom;   
    message = req.body.message;

    send.callTransporter(name, dEmail, from, message);
    res.status(200).json({
        message: "ok",
        from
    })
})


module.exports = router;