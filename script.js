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
                top:0,
                behavior:"smooth"
            });

        });

    });



    document.getElementById("submitBtn").addEventListener("click", () => {


        const answers = {

            q1:getRadio("q1"),
            q2:getRadio("q2"),
            q3:getRadio("q3"),
            q4:getRadio("q4"),
            q5:getRadio("q5"),
            q6:getRadio("q6"),
            q7:getRadio("q7"),
            q8:getRadio("q8"),
            q9:getRadio("q9"),
            q10:getRadio("q10"),


            love:document.getElementById("love").value,
            hurt:document.getElementById("hurt").value,
            promise:document.getElementById("promise").value,
            understand:document.getElementById("understand").value,
            change:document.getElementById("change").value,


            rule1:document.getElementById("rule1").value,
            rule2:document.getElementById("rule2").value,
            rule3:document.getElementById("rule3").value,
            rule4:document.getElementById("rule4").value,
            rule5:document.getElementById("rule5").value,


            finalChoice:getRadio("finalChoice")

        };



        let message = `❤️ OUR RELATIONSHIP RESET ❤️


1. Biggest cause of our arguments:
${answers.q1}


2. During arguments I usually feel:
${answers.q2}


3. What I think you can improve:
${answers.q3}


4. What I think I can improve:
${answers.q4}


5. When one of us is angry:
${answers.q5}


6. What matters more:
${answers.q6}


7. Things that should never happen:
${answers.q7}


8. How we should solve disagreements:
${answers.q8}


9. Most important quality:
${answers.q9}


10. Is this relationship worth fighting for:
${answers.q10}



❤️ MY THOUGHTS


What makes me feel loved:
${answers.love}


What hurts me:
${answers.hurt}


What I promise to work on:
${answers.promise}


What I want you to understand:
${answers.understand}


What I want to change:
${answers.change}



🤝 OUR NEW RULES


1. ${answers.rule1}

2. ${answers.rule2}

3. ${answers.rule3}

4. ${answers.rule4}

5. ${answers.rule5}



❤️ FINAL DECISION

${answers.finalChoice}



I choose us ❤️`;



        // Replace with your WhatsApp number
        const phoneNumber = "265894537147";


        const whatsappLink =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);



        window.location.href = whatsappLink;


    });



    function getRadio(name){

        let option = document.querySelector(
            `input[name="${name}"]:checked`
        );


        return option ? option.value : "No answer";

    }


    updateProgress();

});
