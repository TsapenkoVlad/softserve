$(function() {
  $("h2.head").css("background-color", "green");
  $("h2.head").find(".inner").css("font-size", "35px");
});


$("a[href^='https://']").attr("target", "_blank");


$(function() {
  $("h3").each(function() {
    let $div = $(this).next("div");
    if ($div.length > 0) {
      $(this).before($div);
    }
  });
});

$(function() {
  const checkboxes = $("input[type='checkbox']");
  let checkedCount = 0;

  checkboxes.on("change", function() {
    if ($(this).prop("checked")) {
      checkedCount++;
      if (checkedCount >= 3) {
        checkboxes.prop("disabled", true);
      }
    } else {
      checkedCount--;
    }
  });
});
