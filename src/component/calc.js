import  React from 'react';
function calc(){
    const handleInputChange = (event) => {
        var str=document.getElementById('para').value;
        str.trim();
        var words = str.split(/\s+/);
        document.getElementById('count').innerHTML=words.length;
    
      };
        
    return(
    
        <div class="np"> 
        <div class=" text-center"><h3>Responsive paragraph word counter</h3>
            <textarea class="form-control"type="text" id="para" onChange={handleInputChange}></textarea>
            </div><br/>
            
            word count:&nbsp;<text id="count"></text>
        </div>
        

    )
}
export default calc;