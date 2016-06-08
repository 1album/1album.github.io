// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

    var headers   = document.getElementsByTagName("h2");
    var anchors = document.getElementById('anchors');

    if(headers.length > 0) {
        for(var i = 0; i < headers.length; i++) {
            var li = document.createElement("li");
            var id = headers[i].id.replace(':', '-');   // scrollspy doesn't like ':'
            headers[i].setAttribute('id', id);

            var a  = document.createElement("a");
            a.setAttribute("href", "#" + id);
            a.setAttribute("title", headers[i].innerHTML);
            a.innerHTML = headers[i].innerHTML;
            a.className = "menu-anchor";

            li.appendChild(a);
            anchors.appendChild(li);
        }

        $('body').scrollspy({
            target: '#anchors-bar'
        });

    } else {
        anchors.parentElement.removeChild(anchors)
    }
});

$('.menu-body').on('show.bs.collapse', function(){
    $('.sidebar').affix('checkPosition')
});

$('.menu-body').on('hide.bs.collapse', function(){
    $('.sidebar').affix('checkPosition')
});

