
const panels = document.querySelectorAll('.panel');
const panelContainer = document.querySelector('.panels')

function toggleOpen() {
  this.classList.toggle('open');
}

function classCheck() {
  if((this.classList.contains("open") && this.classList.contains("open-active")) || (!this.classList.contains("open") && !this.classList.contains("open-active"))) {
    let panelsArr = [...panels]
    let check = panelsArr.some(panel => {
      let list = [...panel.classList]
      if (list.includes('open-active') && list.includes('open')) return true
    })

    if (check) {
      // panelContainer.style.height = '80vh'
      panelContainer.classList.add('open')
    } else {
      // panelContainer.style.height = ''
      panelContainer.classList.remove('open')
    }
  } 
  // else {
  //   this.classList.remove("open");
  //   this.classList.remove("open-active");

  //   let panelsArr = [...panels]
  //   let check = panelsArr.some(panel => {
  //     let list = [...panel.classList]
  //     if (list.includes('open-active') && list.includes('open')) return true
  //   })

  //   if (check) {
  //     panelContainer.style.height = '80vh'
  //   } else {
  //     panelContainer.style.height = ''
  //   }
  // }
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// panels.forEach(panel => panel.addEventListener('click', closeAll));

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// panels.forEach(panel => panel.removeEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionstart', toggleActive));
panels.forEach(panel => panel.addEventListener('transitionend', classCheck));
