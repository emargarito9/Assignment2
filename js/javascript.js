/*global $*/

            $(document).ready(function(){
                
            //global variables
  	    	var team = 0;

            //event Listeners
      		$("#btn").on("click", Team);
            $("#btn").click(function(){
                $("#validationFdbk").html(""); //resets validation feedback
                let q1Response = $("#q1").val().toLowerCase();

                //Question 1
                if(q1Response == "yellow"){
                    team = 1;
                }
                else if(q1Response == "blue"){
                    team = 2;
                }
                else if(q1Response == "red"){
                    team = 3;
                }
                else{
                    team +=0;
                }
            
                if(team == 1){
                    $("#GoTeam").html("You're in team Instinct");
                    $(`#team`).html("<img src ='img/instinct.jpg'>");
                }
                else if(team == 2){
                    $("#GoTeam").html("You're in team Mystic!");
                    $(`#team`).html("<img src ='img/mystic.jpg'>");
                }
                else if(team == 3){
                	$("#GoTeam").html(`You're in team Valor!`); 
                    $(`#team`).html("<img src ='img/valor.jpg'>");
                }

            });
            
            function isFormValid(){
                let isValid = true;
                if($("#q1").val() == ""){
                    isValid = false;
                    $("#validationFdbk").html("Question 1 was not answered");
                }
                return isValid;
            }
    
            function Team(){
                let q2Response = $("#q2").val();
                if(q2Response == "light") {
        	           team += .5;
                }else if(q2Response == "ice") {
                    team += 1.5;
                }else if(q2Response == "water") {
                    team += 2;
                }else if(q2Response == "fire") {
                    team += 2.5;
                }
                
            }  
                
            });
            