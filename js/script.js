$(document).ready(function(){
    var app;
    $(document).ready(function () {
        return app.init();
    });
    app = {
        text: 'Hello! Bienvenue dans mon portfolio ;) ',
        index: 0,
        chars: 0,
        speed: 100,
        container: '.text .content',
        init: function () {
            this.chars = this.text.length;
            return this.write();
        },
        write: function () {
            $(this.container).append(this.text[this.index]);
            if (this.index < this.chars) {
                this.index++;
                return window.setTimeout(function () {
                    return app.write();
                }, this.speed);
            }
        }
    };
}.call(this));

$(window).load(function(){
	
	$(".loader,.loading img").fadeOut(800,function(){
			$("body").css("overflow","auto");
				$(".loading").fadeOut(800,function(){
				$(this).remove();
			});
		});

});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }