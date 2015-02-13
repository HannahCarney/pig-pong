describe('Game page', function() {

  var host = 'http://localhost:9999'

  before(function() {
    casper.start(host);
  });

  it('should display a logo', function() {
    casper.thenOpen(host + '/', function() {
      casper.then(function() {
        this.evaluate(function() {
          document.getElementById('#submit').click();
          this.waitForSelector("#highscore", function() {
            expect('#score').to.be.inDOM;
          });
        });
      });
    });
  });

  it('should display a logo', function() {
    casper.thenOpen(host + '/', function() {
      casper.then(function() {
        this.evaluate(function() {
          document.getElementById('#submit').click();
          this.waitForSelector("#highscore", function() {
            expect('canvas').to.be.inDOM;
          });
        });
      });
    });
  });

  it('should display a logo', function() {
    casper.thenOpen(host + '/', function() {
      casper.then(function() {
        this.evaluate(function() {
          document.getElementById('#submit').click();
          this.waitForSelector("#highscore", function() {
            expect('#high-scores-table').to.be.inDOM;
          });
        });
      });
    });
  });
});