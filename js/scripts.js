$(document).ready(function() {
  $("button#add").click(function(event) {
    event.preventDefault();
    var csharpOk = 0
    var cssOk = 0
    var rubyOk = 0
    var checked1 = $("input:radio[name=first]:checked").val();
    var checked2 = $("input:radio[name=second]:checked").val();

    if (checked1 === "csharpYes") {
      csharpOk ++
    }

    else if (checked1 === "cssYes") {
      cssOk += 3
    }

    if (checked2 === "rubyYes") {
      rubyOk += 2
    }

    else if (checked2 === "csharpYes") {
      csharpOk += 2
    }

    if (csharpOk === 0 && cssOk === 0 && rubyOk === 0) {
      alert("Not all answers were filled out");
    }

    else if (csharpOk > cssOk && csharpOk > rubyOk) {
      $('.csharpCheck').show();
      $('.cssCheck').hide();
      $('.rubyCheck').hide();
    }

    else if (cssOk > csharpOk && cssOk > rubyOk) {

      $('.cssCheck').show();
      $('.csharpCheck').hide();
      $('.rubyCheck').hide();
    }

    else if (rubyOk > csharpOk && rubyOk > cssOk) {
      $('.rubyCheck').show();
      $('.cssCheck').hide();
      $('.csharpCheck').hide();
    }

    console.log(csharpOk);
    console.log(cssOk);
    console.log(rubyOk);
    $('input[type="radio"]').prop('checked', false);
  });
});
