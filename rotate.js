var sheet =(function(){
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
})();

sheet.addRule('.ps-rotate-over', 'transform:rotate(-180deg);');
sheet.addRule('.ps-rotate-out', 'transform:rotate(-360deg);');

var rotateEls = document.getElementsByClassName('rotate');
for(var i=0; i<rotateEls.length; i++){
    rotateEls[i].addEventListener('mouseover', function(){
        this.className = 'ps-rotate-over';
    }, false);

    rotateEls[i].addEventListener('mouseout',function(){
        var rotate = this;
        rotate.className = 'ps-rotate-out';
        window.setTimeout(function(){
            rotate.className = '';
        }, 550);
    }, false);
}

