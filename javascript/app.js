$(document).ready(function() {
    $(window).resize(function(){location.reload();});
    $('#slide-box img').each(function() {
        if($(window).width() > 1199){
            var maxHeight = 460;    // Max height for the image
        }
        // var maxWidth = 650; // Max width for the image

        var ratio = 0;  // Used for aspect ratio
        var width = $(this).width();    // Current image width
        var height = $(this).height();  // Current image height

        // Check if current height is larger than max
        if(height > maxHeight){
            ratio = maxHeight / height; // get ratio for scaling image
            $(this).css("height", maxHeight);   // Set new height
            $(this).css("width", width * ratio);    // Scale width based on ratio
            width = width * ratio;    // Reset width to match scaled image
            height = height * ratio;    // Reset height to match scaled image
        }
        // Skeleton manipulation
        if($(window).width() < 1999 && $(window).width() > 950){
            $('#text-block').removeClass('six columns offset-by-one').addClass('eleven columns offset-by-two')
            $('#slider').removeClass('seven columns').addClass('eleven columns offset-by-two')
            $('#about').removeClass('sixteen columns')
        }
        if($(window).width() < 950 && $(window).width() > 768){
            $('#text-block').removeClass('six columns offset-by-one').addClass('eleven columns offset-by-two')
            $('#slider').removeClass('seven columns').addClass('eleven columns offset-by-two')
            $('#about').removeClass('sixteen columns')
        }

        if($(window).width() < 768){
            $('#about').addClass('sixteen columns')
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
