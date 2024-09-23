

function hoverButton(element) {
    element.style.background='#609fff';
    element.style.color='#FCFFDA'
}

function hoverExit(element){
    element.style.background='';
    element.style.color=''

}

var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');