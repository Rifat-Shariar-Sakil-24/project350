

const form = document.querySelector('form');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
        

    document.querySelector('.loading').style.display = 'block';

    
        const formData = new FormData(this);
        const formDataObject = {};
        
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

      

        
    
        try {
            const res = await fetch(`/changePassword/initiate`, {
                method: 'POST',
                body: JSON.stringify(formDataObject),
                headers: { 'Content-Type': 'application/json'}
            });
            
            if (res.status == 201) {
                const body = await res.json();
                const email = body.email;
                console.log(email);
                sessionStorage.setItem('email', email);
                window.location.href = '/changePassword/confirm';

            } else {
                const errorMessage = await res.text(); 
                setTimeout(() => {
                    document.querySelector('.loading').style.display = 'none';
                    alert(errorMessage);
                }, 2000);
            }
        } catch(error) {
            console.log("Error occurred:", error);
        }
   
});











