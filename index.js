/**
 * Created by acer on 2016/9/24.
 */
$(document).ready(function () {


$(".first").bind({
        mousemove: function () {

$(this).css("backgroundColor","white")
        },
    mouseout: function () {
        $(this).css("background-color", "#EC407A");
    }

    }

);$("#row .col-lg-4").click(function () {

      $("#bigimg").hide();
        $("#big").html($(this).html())
    });
    var a=0;

    var img=$(".img-rounded");
    // console.log(img[0].parentNode)
    // console.log(img[0].parentNode.innerHTML)
    for(var i=0;i<img.length;i++){

        img[i].index = i;
        img[i].onclick=function () {
              index=this.index;
          $("#p").html(Number(index+1))

        }

    }



    $("#prv").click(function () {
        var index1 = $("#p").text();
        if(index1>0) {
            // console.log(index1)
            // console.log($("#row .col-lg-4")[index1].innerHTML);
            $("#big").html($("#row .col-lg-4")[index1 - 1].innerHTML)
            $("#p").html(index1 - 1);
        }
    });

    $("#next").click(function () {
    var index2=  $("#p").text();
        if(index2<9) {
        console.log(index2)
        $("#p").html(Number(index2)+1);

            var a = ($("#row .col-lg-4")[index2].innerHTML);
            console.log(a)
            console.log($("#big").html(a))
        }
        // $("#big").html($("#row .col-lg-4")[index2+1].innerHTML)

    });

});