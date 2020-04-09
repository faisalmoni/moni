$(function(){
    
    $(".btn").click(function(){
    var a = $(".name").val();
    var b = $(".email").val();
    var c  = $(".pass").val();
    var d = $(".conPass").val();
    var e = $(".phone").val();
     
    if(a == "" || b == "" || c == "" || d == "" || e == ""){
        alert("please fullfil form first of all")
    }else{
        if(a.length <= 3){
            alert("Name must be more then three characters long");
        }else{
            if(b.length <= 5){
                alert("Email must be more then five characters long")
            }else{
                if(c.length > 8){
                    alert("passWord must not eight overcome characters")
                }else{
                    if(d == c){
                        alert=("PassWord match")
                    }else if(d => c){
                        alert("PassWord not match")
                    }else{
                        if(e.length <= 5){
                            alert("phone number must be wrtie five long")
                        }
                    }
                    
    
                    
                }
            }
        }
    
        
    }
        
    });
    
    
    
    
    
    
    
    
    
    
    
});