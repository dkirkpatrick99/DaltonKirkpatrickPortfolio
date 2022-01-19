
const panels = document.querySelectorAll('.panel');
const panelContainer = document.querySelector('.panels')
const descHeight = document.querySelector(".panels .project-desc").offsetHeight
const panelHeight = document.querySelector(".panels").offsetHeight

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
      const cardHeight = descHeight + panelHeight
      const strHeight = cardHeight.toString() + 'px'
      panelContainer.style.height = strHeight
      // debugger
      panelContainer.classList.add('open')
    } else {
      panelContainer.style.height = ''
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
// b = document.querySelector(".panels .project-desc")
// a = document.querySelector(".panels")
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// panels.forEach(panel => panel.removeEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionstart', toggleActive));
panels.forEach(panel => panel.addEventListener('transitionend', classCheck));
