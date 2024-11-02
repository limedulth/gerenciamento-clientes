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
    





    