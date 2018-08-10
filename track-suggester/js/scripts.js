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
        cssOk += 2
      }

      if (checked2 === "rubyYes") {
        rubyOk ++
      }

      else if (checked2 === "csharpYes") {
        csharpOk += 3
      }

      if (csharpOk === 0 && cssOk === 0 && rubyOk === 0) {
        alert("Not all answers were filled out");
      }

      else if (csharpOk > cssOk && csharpOk > rubyOk) {
        $('#csharpImg').show();
        $('#csharpImg').hide()
        $('#rubyImg').hide();


      }

      else if (cssOk > csharpOk && cssOk > rubyOk) {
        $('#cssImg').show();
        $('#csharpImg').hide();
        $('#rubyImg').hide();
      }

      else $('#rubyImg').show();
      $('#csharpImg').hide();
      $('#csharpImg').hide();

      console.log(csharpOk);
      console.log(cssOk);
      console.log(rubyOk);
      $('input[type="radio"]').prop('checked', false);
  });

});
