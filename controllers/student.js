var db = require(__dirname + '/../lib/mysql');

exports.find = function(req, res, next) {
	db.query('SELECT * FROM student',
		function(err, rows){
			if(err) return next(err);
		    res.send(rows);
		});
};

exports.insert = function(req, res, next) {
	db.query('INSERT INTO student VALUES(?,?,?)', [req.body.studNo, req.body.name, req.body.bdate],
		function(err, rows){
			if(err) return next(err);
		  	res.send(rows);
		});
};

exports.findOne = function(req, res, next) {
	db.query('SELECT * FROM student WHERE studNo=?', [req.params.id],
		function(err, rows){
			if(err) return next(err);
			if(rows.length === 0) res.status(404).send("Student Not Found!");
			else res.send(rows[0]);
		});
};

exports.update = function(req, res, next) {
	db.query('UPDATE student SET ? WHERE studno=?', [req.body, req.params.id],
		function(err, rows){
			if(err) return next(err);		
			res.send(rows);
		});
};

exports.remove = function(req, res, next) {
	db.query('DELETE FROM student WHERE studno=?', [req.params.id],
		function(err, rows){
			if(err) return next(err);		
			res.send(rows);
		});
};

//
