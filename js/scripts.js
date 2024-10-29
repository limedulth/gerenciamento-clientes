const menuBtn = document.getElementById("menuBtn");
    const overlay = document.getElementById ("overlay");
    const subCad = document.getElementById ("btnsubCad");
    const subCaixa = document.getElementById ("subCaixa");

    menuBtn.onclick = function () {
        menuSidebar.classList.toggle("active");
        overlay.classList.toggle("hidden");
    };
    overlay.onclick = function () {
        menuSidebar.classList.toggle("active");
        overlay.classList.toggle("hidden");
    }
    btnsubCad.onclick = function () {
        subCadastro.classList.toggle("showSub");

        

    }
    btnsubCaixa.onclick = function () {
        subCaixa.classList.toggle ("showSub");


    }
    btnDiario.onclick = function () {
        relAnual.classList.toggle ("hidden");
        relSemestre.classList.toggle ("hidden");
        relTrimestre.classList.toggle ("hidden");
        relMensal.classList.toggle ("hidden");
        relSemanal.classList.toggle ("hidden");
        relDiario.classList.toggle ("showRel");



    }
    btnSemanal.onclick = function () {
        relAnual.classList.toggle ("hidden");
        relSemestre.classList.toggle ("hidden");
        relTrimestre.classList.toggle ("hidden");
        relMensal.classList.toggle ("hidden");
        relDiario.classList.toggle ("hidden");
        relSemanal.classList.toggle ("showRel");




    }