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
    notifyIcon.onclick = function () {
        notifyModal.classList.toggle("showModalnotify");
        overlayModal.classList.toggle("show");
        notifyNumber.style.display = 'none'
    }
    overlayModal.onclick = function () {
        notifyModal.classList.toggle("showModalnotify");
        overlayModal.classList.toggle("show");
    }

    const btnRelDiario = document.querySelector('#btnRelDiario')
    const btnRelSemanal = document.querySelector('#btnRelSemanal')
    const btnRelTrimestral = document.querySelector('#btnRelTrimestral')
    const btnRelSemestral = document.querySelector('#btnRelSemestral')
    const btnRelAnual = document.querySelector('#btnRelAnual')
    const btnRelMensal = document.querySelector('#btnRelMensal')


    btnRelDiario.onclick = function () {

        relAnual.classList.remove('active')
        relSemestre.classList.remove('active')
        relTrimestre.classList.remove('active')
        relMensal.classList.remove('active')
        relSemanal.classList.remove('active')
        relDiario.classList.add('active')

        btnRelDiario.classList.add('borderActive')
        btnRelSemanal.classList.remove('borderActive')
        btnRelMensal.classList.remove('borderActive')
        btnRelTrimestral.classList.remove('borderActive')
        btnRelSemestral.classList.remove('borderActive')
        btnRelAnual.classList.remove('borderActive')


    }
    btnRelSemanal.onclick = function () {

        relAnual.classList.remove('active')
        relSemestre.classList.remove('active')
        relTrimestre.classList.remove('active')
        relMensal.classList.remove('active')
        relDiario.classList.remove('active')
        relSemanal.classList.add('active')

        btnRelDiario.classList.remove('borderActive')
        btnRelSemanal.classList.add('borderActive')
        btnRelMensal.classList.remove('borderActive')
        btnRelTrimestral.classList.remove('borderActive')
        btnRelSemestral.classList.remove('borderActive')
        btnRelAnual.classList.remove('borderActive')


    }
    btnRelMensal.onclick = function () {

        relAnual.classList.remove('active')
        relSemestre.classList.remove('active')
        relTrimestre.classList.remove('active')
        relMensal.classList.add('active')
        relDiario.classList.remove('active')
        relSemanal.classList.remove('active')

        btnRelDiario.classList.remove('borderActive')
        btnRelSemanal.classList.remove('borderActive')
        btnRelMensal.classList.add('borderActive')
        btnRelTrimestral.classList.remove('borderActive')
        btnRelSemestral.classList.remove('borderActive')
        btnRelAnual.classList.remove('borderActive')
    }
    btnRelTrimestral.onclick = function () {

        relAnual.classList.remove('active')
        relSemestre.classList.remove('active')
        relMensal.classList.remove('active')
        relDiario.classList.remove('active')
        relSemanal.classList.remove('active')
        relTrimestre.classList.add('active')

        btnRelDiario.classList.remove('borderActive')
        btnRelSemanal.classList.remove('borderActive')
        btnRelMensal.classList.remove('borderActive')
        btnRelTrimestral.classList.add('borderActive')
        btnRelSemestral.classList.remove('borderActive')
        btnRelAnual.classList.remove('borderActive')
    }
    btnRelSemestral.onclick = function () {

        relAnual.classList.remove('active')
        relSemestre.classList.remove('active')
        relMensal.classList.remove('active')
        relDiario.classList.remove('active')
        relSemanal.classList.add('active')
        relTrimestre.classList.remove('active')

        btnRelDiario.classList.remove('borderActive')
        btnRelSemanal.classList.remove('borderActive')
        btnRelMensal.classList.remove('borderActive')
        btnRelTrimestral.classList.remove('borderActive')
        btnRelSemestral.classList.add('borderActive')
        btnRelAnual.classList.remove('borderActive')
    }
    btnRelAnual.onclick = function () {

        relAnual.classList.add('active')
        relSemestre.classList.remove('active')
        relMensal.classList.remove('active')
        relDiario.classList.remove('active')
        relSemanal.classList.remove('active')
        relTrimestre.classList.remove('active')

        btnRelDiario.classList.remove('borderActive')
        btnRelSemanal.classList.remove('borderActive')
        btnRelMensal.classList.remove('borderActive')
        btnRelTrimestral.classList.remove('borderActive')
        btnRelSemestral.classList.remove('borderActive')
        btnRelAnual.classList.add('borderActive')
    }

    function carregar() {
        relDiario.classList.add('active')
        btnRelDiario.classList.add('borderActive')

    }
    

    
    





    