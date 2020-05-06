const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
    }

    function classCheck() {
      if((this.classList.contains("open") && this.classList.contains("open-active")) || (!this.classList.contains("open") && !this.classList.contains("open-active"))) {
        return;
      } else {
        this.classList.remove("open");
        this.classList.remove("open-active");

      }
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    // panels.forEach(panel => panel.addEventListener('click', closeAll));

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    // panels.forEach(panel => panel.removeEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionstart', toggleActive));
    panels.forEach(panel => panel.addEventListener('transitionend', classCheck));
