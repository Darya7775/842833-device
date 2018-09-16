      var link = document.querySelector(".contacts_modal");
      var popup = document.querySelector(".modal_contacts");
      var close = popup.querySelector(".modal__close");
      var form = popup.querySelector(".modal_form");
      var login = popup.querySelector("[id=modal_name]");
      var email = popup.querySelector("[id=modal_mail]");
      var overlay = document.querySelector(".modal_overlay");

      var isStorageSupport = true;
      var storage = "";

      try {
        storage = localStorage.getItem("login");
      } catch (err) {
        isStorageSupport = false;
      }

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal_show");
        overlay.classList.add("modal_show");

        if (storage) {
          login.value = storage;
          email.focus();
        } else {
          login.focus();
        }
      });

      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal_show");
        popup.classList.remove("modal_error");
        overlay.classList.remove("modal_show");
      });

      form.addEventListener("submit", function (evt) {
        if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.add("modal_error");
        popup.offsetWidth = popup.offsetWidth;
        popup. classList.add ("modal_error");
        } else {
          if (isStorageSupport) {
          localStorage.setItem("login", login.value);
          }
        }
      });

      window.addEventListener( "keydown", function (evt) {
        if (evt.keyCode === 27) {
          if (popup.classList.contains ("modal_show")) {
            evt.preventDefault();
            popup.classList.remove("modal_show");
            popup.classList.remove("modal_error");
            overlay.classList.remove("modal_show");
          }
        }
      });
