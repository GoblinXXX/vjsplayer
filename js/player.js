$(function(){
    let $refreshButton = $('#refresh');
    let $results = $('#css_result');

    function refresh(){
        let css = $('style.cp-pen-styles').text();
        $results.html(css);
    }


    refresh();
    $refreshButton.click(refresh);

    // Select all the contents when clicked
    $results.click(function(){
        $(this).select();
    });



    let video = videojs('#my_video_1');
    video.markers({
        markers: [
            {time: 2.5, text: "dfhdfgh"},
            {time: 4,  text: "is"},
            {time: 7,text: "so"},
            {time: 20,  text: "dcfsdfgsdf"}
        ],
        markerTip:{
            display: true,
            text: function(marker) {
                return marker.text;
            }
        }
    });


    videojs('#my_video_1').chapter_thumbnails({
        src: '/path/to/chapters.vtt'
    });



    $(function(){
        $vtitle = $("<div><span>Зважені та щасливі</span> 1 сезон 5 серія</div>");
        $vtitle_span = $();
        $('.video-js .vjs-remaining-time').prepend($vtitle);
        $vtitle.addClass("vtitle");

        $vnext = $("<div></div>");
        $('.video-js .vjs-control-bar').append($vnext);
        $vnext.addClass("vnext");

        $vhd = $("<div></div>");
        $('.video-js .vjs-control-bar').append($vhd);
        $vhd.addClass("vhd");
    });



    let player = window.player = videojs('#my_video_1');
    let shareOptions = {
        socials: ['fbFeed', 'tw', 'reddit', 'gp', 'messenger', 'linkedin', 'vk', 'ok', 'mail', 'telegram', 'whatsapp', 'viber'],

        url: window.location.href,
        title: 'videojs-share',
        description: 'video.js share plugin',
        image: 'https://dummyimage.com/1200x630',

        // required for Facebook and Messenger
        fbAppId: '12345',
        // optional for Facebook
        redirectUri: window.location.href + '#close',

        // optional for VK
        isVkParse: true,
    };

    player.share(shareOptions);
});








