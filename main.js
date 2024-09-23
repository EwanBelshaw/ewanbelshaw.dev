
// Below code changes the colors on buttons when hovered

function hoverButton(element) {
    element.style.background='#609fff';
    element.style.color='#FCFFDA'
}

function hoverExit(element){
    element.style.background='';
    element.style.color=''

}

// Below code allows for better use on mobile

var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');