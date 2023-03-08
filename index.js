fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        for(let i=0;i<json.length;i++){
            var op=document.createElement('option')
            op.innerHTML=json[i].name.common
            document.getElementById('sel').appendChild(op)
            
        }
        if(json[0].currencies!=null){
            var cur=Object.keys(json[0].currencies)
            for(let j=0;j<cur.length;j++){
                var l=document.createElement('button')
                l.innerHTML=cur[j]
                l.id='b'+j
                var inp=document.createElement('p')
                inp.id=l.id+l.id
                l.onclick = function() { reply_click(this);};
                document.getElementById('b').appendChild(l)
                document.getElementById('b').appendChild(inp)
                
            }
        }
      })


function se(){
    var e = document.getElementById("b");
        e.innerHTML = "";
    var v=document.getElementById('sel').value;
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        for(let i=0;i<json.length;i++){
            if(v==json[i].name.common){

                if(json[i].currencies!=null){
                    var cur=Object.keys(json[i].currencies)
                    for(let j=0;j<cur.length;j++){
                        var l=document.createElement('button')
                        l.innerHTML=cur[j]
                        l.id='b'+j
                        var inp=document.createElement('p')
                        inp.id=l.id+l.id
                        l.onclick = function() { reply_click(this);};
                        document.getElementById('b').appendChild(l)
                        document.getElementById('b').appendChild(inp)
                        var b=document.createElement('br')
                        document.getElementById('b').appendChild(b)
                    }
                }
                break;
            }
            
        }
})
}
function reply_click(em)
{
    var num=em.id;
    var m=document.getElementById(num).textContent;
    var url='https://api.fastforex.io/fetch-multi?from='+m+'&to=USD&api_key=3a7028da88-acd389689c-rqa9zx';
    fetch(url)
      .then(response => response.json())
      .then(country =>{
        var exchangerate=country.results.USD
        console.log(exchangerate)
        document.getElementById(num+num).innerHTML=exchangerate.toFixed(2)
      })
    

}
      
      /*  fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(json => {
            for(let i=0;i<json.length;i++){
                if(json[i].currencies!=null){
                    var cur=Object.keys(json[i].currencies)
                    for(let j=0;j<cur.length;j++){
                        console.log(cur[j]);
                    }
                }
                console.log('------')
                
                
            }
        })*/