var mobile = false;
var nav = false;

document.addEventListener('DOMContentLoaded', function() { // Page init
    infoButton(0, null);
    if (matchMedia) {
        var mq = window.matchMedia("(min-width: 1000px)");
        mq.addListener(widthChange);
        widthChange(mq);
    }
    if (!mobile) {
        document.querySelector('#plain-html').style = 'display:none';
        document.querySelector('#js').style = 'display:block';
    } else document.querySelector('#plain-html h3').style = 'display:none';
}, false);

function widthChange(mq) { // media query change
    if (mq.matches) mobile = false;
    else mobile = true;
}

var info_index = 0;
function infoButton(index, e) {
    if(e) e.preventDefault();
    info_index = index;
    var matches = document.querySelectorAll('#js > div:nth-of-type(1) > p');
    for(var i = 0; i < matches.length; i++) {
        if(i == info_index) matches[i].style = 'display:block';
        else matches[i].style = 'display:none';
    }
}

function button (url, e) {
    e.preventDefault();
    var win = window.open(url, '_blank');
    win.focus();
}

function home() {
    if(!mobile) scrollTo(document.querySelector('body'));
    else {
        if(!nav) {
            document.querySelector('nav > div > ul').style = 'display:block';
            nav = true;
            return;
        } else {
            document.querySelector('nav > div > ul').style = 'display:none';
            nav = false;
            return;
        }
    }
}

function scrollTo(e) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: e.offsetTop
    });
  }