var request = require('supertest'),
    should = require('should-http');
    
describe('student', function(){
    var url = 'localhost:5000';
    describe('find()', function(){
        it('should retrieve all student record', function(done){
            request(url)
                .get('/students')
                .end(function(err, res){
                    if(err) throw err;
                    res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Array);
                    done();
                });
                
        });
    });
    describe('findOne()', function(){
        it('should retrieve an existing student record', function(done){
            request(url)
                .get('/students/2013-00000')
                .end(function(err, res){
                    if(err) throw err;
                    res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object);
                    done();
                });       
        });
    });
    describe('insert()', function(){
        it('should return newly created record', function(done){
            request(url)
                .post('/students')
                .send({
                    'studNo':'2015-12345',
                    'name': 'Kyuti Patuti',
                    'bdate': '1998-01-31'
                })
                .end(function(err, res){
                    if(err) throw err;
                    res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object);
                    done();
                })
        });
    });
    
    /*describe('update()', function(){
        it('', function(){
            
        });
    });
    describe('remove()', function(){
        it('', function(){
            
        });
    });*/
});