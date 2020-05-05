function validate(event){
        license = document.getElementById("accept");
        title = document.getElementById("imageTitle");
        descript = document.getElementById("imageDescript");
        
        if(title.value.length == 0)
        {
            alert('Kindly Add A Title.');
            title.style.backgroundColor = "#FF0000";
            event.preventDefault();
        }
        else
        {
            title.style.backgroundColor = "rgba(0,0,0,0)";
        }
    
        if(descript.value.length == 0)
        {
            alert('Description is Mandatory.');
            descript.style.backgroundColor = "#FF0000";
            event.preventDefault();
        }
        else
        {
            descript.style.backgroundColor = "rgba(0,0,0,0)";
        }
        
        if(license.checked == false)
        {
            
            document.getElementById("check").style.backgroundColor = "#FF0000";
            alert('Kindly Accept The EULA.');
            event.preventDefault();
        }
        else
        {
            document.getElementById("check").style.backgroundColor = "rgba(0,0,0,0)";
        }
    }