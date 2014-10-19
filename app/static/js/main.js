/**
 * Created by steve on 10/19/14.
 */


    var addContact = function() {

        /*
        Gets data and puts in database
         */

        var name = $("#first").val() + " " + $("#last").val();
        var phone = $("#phone").val();
        var address = $("#address").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var zip = $("#zip").val();

        $("tbody").append("<tr>" +
        "<td>" + name + "</td>" +
        "<td>" + phone + "</td>" +
        "<td>" + address + "</td>" +
        "<td>" + city + "</td>" +
        "<td>" + state + "</td>" +
        "<td>" + zip + "</td>" +
        "<td><a href='#'>Delete</a></td>" +
        "</tr>")

    $(document).ready(function() {

        $("tbody").onclick("click", "a", function(){
            $(this.closest("tr").remove());
        });

        $("#add").on("clicl", function() {
            addContact();
        });
    });
});
