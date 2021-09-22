$("form").each(function (i, v) {
    var response = $(this).find('.message_response');
   $(this).submit(function (e) {
     e.preventDefault();
     $(this)
       .find(".form-group")
       .each(function (i, v) {
         var fieldVal = $(this).find(".required").val();
         var fieldname = $(this).find(".required").attr("placeholder");
         var outputmsg = $(this).find(".message_output");
         if (fieldVal == null || fieldVal == "") {
           outputmsg.html(
             '<span class="form-alert">' +
               fieldname +
               " is required</span>"
           );
         } else {
           outputmsg.html("");
           response.html("Successfully Loggedin");
           //More Function
         }
       });
   });
 });