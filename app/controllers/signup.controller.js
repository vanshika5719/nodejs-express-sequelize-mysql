const db = require("../config/authdb");
const bcrypt = require("bcrypt");

module.exports.home = (req, res) => {
    res.send("api working here ...");
};

// signup
module.exports.signup = async (req, res) => {
    console.log(req.body, "data##");
    const fname = req.body.fname;
    const lname = req.body.lname;
    const emailid = req.body.emailid;
    const pass = req.body.pass;
    const interest = req.body.interest;
    const Netflix = req.body.Netflix;
    const HBO = req.body.HBO;
    const Amazon = req.body.Amazon;
    const Disney = req.body.Disney;

    // first check email id already exit
    let emailchkqry = `select emailid from users where emailid = '${emailid}' `;
    db.query(emailchkqry, async (err, result) => {
        if (err) 
            throw err;
        

        console.log(result.length, 'check email id');
        if (result.length > 0) {
            res.send({status: false, msg: "Email Id Already Exits"});
        } else { // password decrypt
            decryptpwd = await bcrypt.hash(pass, 10);
            // insert data
            let insertqry = `insert into users (fname,lname, emailid, pass, interest, Netflix, HBO, Amazon, Disney) 
      values('${fname}','${lname}','${emailid}','${decryptpwd}','${interest}','${Netflix}','${HBO}','${Amazon}','${Disney}')`;
            // let insertqry = `insert into users(name,email,password) values('${name}','${email}','${decryptpwd}') `;
            db.query(insertqry, (err, result) => {
                if (err) 
                    throw err;
                
                res.send({status: true, msg: "User register successful"});
            });
        }
    });
};

// login

module.exports.login = (req, res) => {
    console.log(req.body, "login");
    let emailid = req.body.emailid;
    let pass = req.body.pass;

    // checkemailid
    let chkemailid = `select * from users where emailid = '${emailid}'`;
    db.query(chkemailid, async (err, result) => {
        if (err) 
            throw err;
        
        console.log(result, 'rrr');

        if (result.length > 0) {
            let chkpwd = await bcrypt.compare(pass, result[0].pass);
            console.log(chkpwd, "chkpwd##");
            if (chkpwd === true) {
                res.send({status: true, result: result, msg: "User login successful"});
            }else {
              res.send({status: false, msg: 'Invalid emailid or password!!'})
          }

        } else {
            res.send({status: false, msg: 'Invalid emailid or password!!'})
        }
    });

}
