/**
 * Created by aayusharora on 7/2/17.
 */
$(function () {
    var URL = 'https://loklak.org/api/search.json?timezoneOffset=-330&q=Amitabh';
    $.ajax({url: URL, success: function(result){

        var result = result;
        console.log(result);
        $("#output").html(result);

    }});
});