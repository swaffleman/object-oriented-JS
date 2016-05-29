$(document).ready(function(){
   $('form').submit( function (evt){
       evt.preventDefault();
        var searchTerm = $('#search');
       var submitbutton = $('#submit');
       
       searchTerm.prop("disabled",true);
       submitbutton.attr("disabled", true).val("searching...");
   
       var flickrAPI = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
       var flickrOptions = {
           tags: searchTerm.val(),
           format: "json"
       };
       function displayPhotos(data){
           var photoHTML = '<ul>';
           $.each( data.items, function (i,photo){
               photoHTML += '<li class="grid-25 tablet-grid-50">';
               photoHTML += '<a href ="' + photo.link + '" class="image">';
               photoHTML += '<img src="' + photo.media.m + '"></a></li>';
           });
           photoHTML += '</ul>';
           $('#photos').html(photoHTML);
           searchTerm.prop("disabled", false);
           submitbutton.attr("disabled", false).val("search");
       }
       $.getJSON(flickrAPI, flickrOptions, displayPhotos);
   }); 
}); //end ready



