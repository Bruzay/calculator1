
      var inputlabel = document.getElementById('inputlabel');

        function pushBtn(obj) {
            var pushed = obj.innerHTML;

            if (pushed == '=') {
                //Calculate
            inputlabel.innerHTML = eval(inputlabel.innerHTML);
            
            } else  if  (pushed == 'AC') {
                //all clear
                inputlabel.innerHTML = '0';

            }else if (pushed == 'Del') {
                if (inputlabel.innerHTML.length == 1) {
                    inputlabel.innerHTML = '0';
                } else {
                    inputlabel.innerHTML = inputlabel.innerHTML.slice(0,-1);
                }
                

             } else {
                if (inputlabel.innerHTML == '0') {
                    inputlabel.innerHTML = pushed;

                } else {
                    inputlabel.innerHTML += pushed;
                    
                }
            }
        }
        

        