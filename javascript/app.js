$(document).ready(function() {
    $(window).resize(function(){location.reload();});
    $('#slide-box img').each(function() {
        // if($(window).width() > 943){
        //     var maxHeight = 458;    // Max height for the image
        // }
        // // var maxWidth = 650; // Max width for the image

        // var ratio = 0;  // Used for aspect ratio
        // var width = $(this).width();    // Current image width
        // var height = $(this).height();  // Current image height

        // // Check if current height is larger than max
        // if(height > maxHeight){
        //     ratio = maxHeight / height; // get ratio for scaling image
        //     $(this).css("height", maxHeight);   // Set new height
        //     $(this).css("width", width * ratio);    // Scale width based on ratio
        //     width = width * ratio;    // Reset width to match scaled image
        //     height = height * ratio;    // Reset height to match scaled image
        // }
        // Skeleton manipulation
        if($(window).width() > 1199){
            $('#text-block').addClass('six columns offset-by-one');
            // $('#slider').addClass('seven columns offset-by-two');
            $('#slide-box > img').addClass('seven columns');
            $('#about').addClass('sixteen columns');
        }
        if($(window).width() <= 1199 && $(window).width() >= 1080){
            $('#text-block').removeClass('six columns offset-by-one').addClass('ten columns offset-by-two');
            $('#slider').removeClass('seven columns').addClass('ten columns');
            $('#slide-box > img').removeClass('seven columns').addClass('ten columns');
            // $('#about').removeClass('sixteen columns');
        }
        if($(window).width() <= 1079 && $(window).width() >= 944){
            $('#slide-box > img').removeClass('seven columns');
            $('#text-block').removeClass('ten columns offset-by-two').addClass('nine columns offset-by-two');
            $('#slide-box > img').removeClass('ten columns').addClass('eight columns');
            $('#slider').removeClass('nine columns offset-by-one').addClass('eight columns');
        }
        if($(window).width() <= 943 && $(window).width() >= 846){
            $('#slide-box > img').addClass('seven columns');
            $('#text-block').removeClass('nine columns offset-by-two').addClass('nine columns offset-by-one');
            $('#slide-box > img').removeClass('eight columns').addClass('seven columns');
            $('#slider').addClass('seven columns');
        }
        if($(window).width() <= 845 && $(window).width() >= 760){
            $('#text-block').removeClass('nine columns offset-by-one').addClass('nine columns');
            $('#slider').removeClass('seven columns').addClass('six columns');
            $('#slide-box > img').removeClass('seven columns').addClass('six columns');
        }
        if($(window).width() < 759){
            $('#about').addClass('sixteen columns');
            $('#slide-box > img').removeClass('six columns').addClass('seven columns');
        }


        // Check if the current width is larger than the max
        // if(width > maxWidth){
        //     ratio = maxWidth / width;   // get ratio for scaling image
        //     $(this).css("width", maxWidth); // Set new width
        //     $(this).css("height", height * ratio);  // Scale height based on ratio
        //     height = height * ratio;    // Reset height to match scaled image
        //     width = width * ratio;    // Reset width to match scaled image
        // }
    });
});
