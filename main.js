function sendToSib(){  
    //document.getElementById('form').submit();
     
      let x = Math.random();
      let y = Math.random();
      let c= x*y+ new Date().getTime() / 1000;
      let b= String(c)+'@gmail.com'
      var date = document.getElementsByName('date')[0].value;
      var time = document.getElementsByName('time')[0].value;
      var Ou = document.getElementsByName('Ou')[0].value;
      var type_herc = document.getElementById('type_herc').value;
    
      
      var detail = document.getElementsByName('detail')[0].value;
      var place_exct = document.getElementById('place_exct').value;
      console.log(date,time,Ou,type_herc,detail,place_exct)
  
    fetch("https://api.sendinblue.com/v3/contacts", {
      "headers": {
        'Content-Type':' application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*',
        "api-key":"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",
      },
      "body":JSON.stringify({"email":String(b),"attributes":{"NOM":name,"DATE":date,"TIME":time,"PLACE":Ou,"TYPE_OF_HARASSMENT":type_herc,"WHAT_HAPPEND":detail,"WHERE_EXACTLY":place_exct,"listid":6}}),
      "method": "POST",
      "mode": "cors"
  }).then(function() {
    let ok=document.getElementById('note');
    ok.classList.remove('hidden');
  
  }).catch(function() {
    alert("error");
  });
  
  }
//   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
  
  var form = document.getElementById('form');
 
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);