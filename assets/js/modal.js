 // Get the modal
         var modal = document.getElementById('myModalPres');
         var modalL = document.getElementById('myModalVPL');
         var modalC = document.getElementById('myModalVPC');
         var modalF = document.getElementById('myModalVPF');
         var modalM = document.getElementById('myModalVPM');
         var modalH = document.getElementById('myModalVPH');
         var modalIA = document.getElementById('myModalDIA');
         var modalW = document.getElementById('myModalDW');
         var modalMe = document.getElementById('myModalDMe');
         var modalDF = document.getElementById('myModalDF');
         var modalR = document.getElementById('myModalDR');
         var modalOR = document.getElementById('myModalDOR');
         var modalNM = document.getElementById('myModalDNM');
         var modalADV = document.getElementById('myModalADV');
         var modalNCVPL = document.getElementById('myModalNCVPL');
         var modalNCVPCD = document.getElementById('myModalNCVPCD');

         // Get the image that opens the modal
          var img = document.getElementById("pres");
          var imgL = document.getElementById("VPL");
          var imgC = document.getElementById("VPC");
          var imgF = document.getElementById("VPF");
          var imgM = document.getElementById("VPM");
          var imgH = document.getElementById("VPH");
          var imgIA = document.getElementById("DIA");
          var imgW= document.getElementById("DW");
          var imgMe = document.getElementById("DMe");
          var imgDF= document.getElementById("DF");
          var imgR = document.getElementById("DR");
          var imgOR = document.getElementById("DOR");
          var imgNM = document.getElementById("DNM");
          var imgADV = document.getElementById("ADV");
          var imgNCVPL = document.getElementById("NCVPL");
          var imgNCVPCD = document.getElementById("NCVPCD");


          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("closebtn")[0];
          var spanL = document.getElementsByClassName("closebtnL")[0];
          var spanC = document.getElementsByClassName("closebtnC")[0];
          var spanF = document.getElementsByClassName("closebtnF")[0];
          var spanM = document.getElementsByClassName("closebtnM")[0];
          var spanH = document.getElementsByClassName("closebtnH")[0];
          var spanIA = document.getElementsByClassName("closebtnIA")[0];
          var spanW = document.getElementsByClassName("closebtnW")[0];
          var spanMe = document.getElementsByClassName("closebtnMe")[0];
          var spanDF = document.getElementsByClassName("closebtnDF")[0];  
          var spanR = document.getElementsByClassName("closebtnR")[0];
          var spanOR = document.getElementsByClassName("closebtnOR")[0];
          var spanNM = document.getElementsByClassName("closebtnNM")[0];
          var spanADV = document.getElementsByClassName("closebtnADV")[0];
          var spanNCVPL = document.getElementsByClassName("closebtnNCVPL")[0];
          var spanNCVPCD = document.getElementsByClassName("closebtnNCVPCD")[0];

          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
            modal.style.display = "none";
          }
          spanL.onclick = function() {
            modalL.style.display = "none";
          }
          spanC.onclick = function() {
            modalC.style.display = "none";
          }
          spanF.onclick = function() {
            modalF.style.display = "none";
          }
          spanM.onclick = function() {
            modalM.style.display = "none";
          }
          spanH.onclick = function() {
            modalH.style.display = "none";
          }
          spanIA.onclick = function() {
            modalIA.style.display = "none";
          }
          spanW.onclick = function() {
            modalW.style.display = "none";
          }
          spanMe.onclick = function() {
            modalMe.style.display = "none";
          }
          spanDF.onclick = function() {
            modalDF.style.display = "none";
          }
          spanR.onclick = function() {
            modalR.style.display = "none";
          }
          spanOR.onclick = function() {
            modalOR.style.display = "none";
          }
          spanNM.onclick = function() {
            modalNM.style.display = "none";
          }
          spanADV.onclick = function() {
            modalADV.style.display = "none";
          }
          spanNCVPL.onclick = function() {
            modalNCVPL.style.display = "none";
          }
          spanNCVPCD.onclick = function() {
            modalNCVPCD.style.display = "none";
          }

         // When the user clicks the img, open the modal
         img.onclick = function() {
         modal.style.display = "block";
         }
         imgL.onclick = function() {
         modalL.style.display = "block";
         }
         imgC.onclick = function() {
         modalC.style.display = "block";
         }
         imgF.onclick = function() {
         modalF.style.display = "block";
         }
         imgM.onclick = function() {
         modalM.style.display = "block";
         }
         imgH.onclick = function() {
         modalH.style.display = "block";
         }
         imgIA.onclick = function() {
         modalIA.style.display = "block";
         }
         imgW.onclick = function() {
         modalW.style.display = "block";
         }
         imgMe.onclick = function() {
         modalMe.style.display = "block";
         }
         imgDF.onclick = function() {
         modalDF.style.display = "block";
         }
         imgR.onclick = function() {
         modalR.style.display = "block";
         }
         imgOR.onclick = function() {
         modalOR.style.display = "block";
         }
         imgNM.onclick = function() {
         modalNM.style.display = "block";
         }
         imgADV.onclick = function() {
         modalADV.style.display = "block";
         }
         imgNCVPL.onclick = function() {
         modalNCVPL.style.display = "block";
         }
         imgNCVPCD.onclick = function() {
         modalNCVPCD.style.display = "block";
         }
         // When the user clicks anywhere outside of the modal, close it
         window.onclick = function(event) {
         if (event.target == modal) {
         modal.style.display = "none";
         }
         if (event.target == modalL) {
         modalL.style.display = "none";
         }
         if (event.target == modalC) {
         modalC.style.display = "none";
         }
             if (event.target == modalF) {
         modalF.style.display = "none";
         }
             if (event.target == modalM) {
         modalM.style.display = "none";
         }
             if (event.target == modalH) {
         modalH.style.display = "none";
         }
             if (event.target == modalIA) {
         modalIA.style.display = "none";
         }
              if (event.target == modalW) {
         modalW.style.display = "none";
         }
             if (event.target == modalMe) {
         modalMe.style.display = "none";
         }
             if (event.target == modalDF) {
         modalDF.style.display = "none";
         }
             if (event.target == modalR) {
         modalR.style.display = "none";
         }
             if (event.target == modalOR) {
         modalOR.style.display = "none";
         }
             if (event.target == modalNM) {
         modalNM.style.display = "none";
         }
             if (event.target == modalADV) {
         modalADV.style.display = "none";
         }
             if (event.target == modalNCVPL) {
         modalNCVPL.style.display = "none";
         }
             if (event.target == modalNCVPCD) {
         modalNCVPCD.style.display = "none";
         }
         }