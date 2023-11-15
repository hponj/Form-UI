document.addEventListener('DOMContentLoaded', function() {
    const inputmax = document.getElementById('input').maxLength;
    document.getElementById('count').innerText = inputmax;

    document.getElementById('input').addEventListener('input', function() {
        const diketik = document.getElementById('input').value.length;
        const maxketik = document.getElementById('input').maxLength;

        const updateketik = maxketik - diketik;
        document.getElementById('count').innerText = updateketik.toString();

        if (updateketik === 0){
            document.getElementById('count').innerHTML = "limit";
            document.getElementById('label').style.color = "red";
        } else{
            document.getElementById('label').style.color = "#747474";
        }
        
    });

    document.getElementById('input').addEventListener('focus', function(){
        document.getElementById('label').style.visibility = 'visible';
    });

    document.getElementById('input').addEventListener('blur', function(){
        document.getElementById('label').style.visibility = 'hidden';
    });
});

