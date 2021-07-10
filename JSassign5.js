$(document).ready(function () {
  console.log("JS LOADED");


  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function (e) {

      for (var i = 0; i < e.length; i++) {

          var quesTions = $("<h2>").html("Q" + e[i].id + " " + e[i].question);
          $("#question-div").append(quesTions);


          // <div>
          //     <label>
          //         <input type="radio" name="options">
          //         <span>Harry</span>
          //     </label>
          // </div>

          for (var j = 0; j < e[i].options.length; j++) {
              var optionsDiv = $("<div>").addClass("label-div");
              var optionLabel = $("<label>").attr("id", e[i].id);
              var labeL = $("<input>").attr("type", "radio").attr("name", ("option" + e[i].id)).attr("value", (j + 1)).attr("class", ("option" + e[i].id)).addClass("radio-btn");
              var spaN = $("<span>").html(e[i].options[j]);
              // var spanYes = $("<span>").append($("<i>").addClass("fas fa-check"));
              optionLabel.append(labeL, spaN);
              optionsDiv.append(optionLabel);
              $("#question-div").append(optionsDiv);
              

          } //inner loop end

          $("#question-div").append($("<div>").addClass("seprator"));

      } //outer loop end 


      $("#submit-btn").click(function (op) {
          op.preventDefault();
          var selected = [];
          var answers = [];
          // var newSpan = document.createElement("span");
          // var newI = document.createElement("i");
          // newI.addClass("fas fa-check");
          // newSpan.appendChild(newI);
          // var spanYes = $("<span>").append($("<i>").addClass("fas fa-check"));
          // console.log(spanYes)
          for (var i = 0; i < e.length; i++) {
              var nam = 'option' + e[i].id;
              selected.push($("input[name= " + nam + "]:checked").val());
              answers.push(e[i].answer)
              if($("input[name= " + nam + "]:checked").val() == e[i].answer){
                  //console.log($("input[name= " + nam + "]:checked"))
                  $("input[name= " + nam + "]:checked").parent().append("<span><i class='fas fa-check'></i></span>");
                  //console.log(newSpan);                  
              } else {
                  $("input[name= " + nam + "]:checked").parent().append("<span><i class='fas fa-times'></i></span>");
                  $("input[name= " + nam + "]")[e[i].answer - 1].parentNode.append($("<i>").addClass("fas fa-check")[0]);
              }
          }
          console.log("selected" + selected)
          console.log("answer" + answers)

          var counter = 0;
          for (var n = 0; n < selected.length; n++) {
              for (var n = 0; n < answers.length; n++) {
                  if (selected[n] == answers[n]) {
                      counter++
                  }

              }
          } // counter loop end here

          

          console.log(counter)
          $("#marks-got").html(counter + "/5")

      }); // button end here


  }) // api get call end 



})