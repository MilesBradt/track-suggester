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

      if (csharpOk > cssOk && csharpOk > rubyOk) {
        alert("C#!");
      }

      else if (cssOk > csharpOk && cssOk > rubyOk) {
        alert("CSS!");
      }

      else alert("Ruby!");

      console.log(csharpOk);
      console.log(cssOk);
      console.log(rubyOk);
      $('input[type="radio"]').prop('checked', false);
  });

});
