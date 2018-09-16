      var mapLink = document.querySelector(".map");
      var mapPopup = document.querySelector(".modal_map");
      var mapClose = mapPopup.querySelector(".modal__close");
      var mapOverlay = document.querySelector(".modal_overlay");

      mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal_show");
        mapOverlay.classList.add("modal_show");
      });

      mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal_show");
        mapOverlay.classList.remove("modal_show");
      });

       window.addEventListener( "keydown", function (evt) {
        if (evt.keyCode === 27) {
          if (mapPopup.classList.contains ("modal_show")) {
            evt.preventDefault();
            mapPopup.classList.remove("modal_show");
            mapOverlay.classList.remove("modal_show");
          }
        }
      });