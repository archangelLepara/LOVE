document.addEventListener("DOMContentLoaded", () => {

    const pages = document.querySelectorAll(".page");
    const nextButtons = document.querySelectorAll(".next-btn");
    const progressBar = document.getElementById("progressBar");

    let currentPage = 0;


    function updateProgress(){

        let progress = (currentPage / (pages.length - 1)) * 100;
        progressBar.style.width = progress + "%";

    }


    nextButtons.forEach(button => {

        button.addEventListener("click", () => {


            pages[currentPage].classList.remove("active");


            currentPage++;


            if(currentPage < pages.length){

                pages[currentPage].classList.add("active");

            }


            updateProgress();


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


        });

    });



    document.getElementById("submitBtn").addEventListener("click", function(){


        const message = "Test message - Relationship Reset ❤️";


        const phoneNumber = "+265894537147";


        const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);



        window.location.href = whatsappURL;


    });


    updateProgress();

});
