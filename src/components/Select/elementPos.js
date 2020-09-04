export default class ElementPagePos {
  constructor(element) {
    this.top = 0;
    this.left = 0;
    this.element = element;
    this.docScrollTop = 0;
    this.docScrollLeft = 0;
  }

  init = () => {
    this.getElementPageLeft();
    this.getElementPageTop();
  };

  getElementPageLeft = () => {
    if (this.element) {
      this.left = this.element.offsetLeft;
      let parent = this.element.offsetParent;

      while (parent != null) {
        this.left += parent.offsetLeft + parent.clientLeft;
        parent = parent.offsetParent;
      }

      this.left = this.left;
    }
  };

  getElementPageTop = () => {
    if (this.element) {
      this.top = this.element.offsetTop;
      let parent = this.element.offsetParent;
      while (parent != null) {
        this.top += parent.offsetTop + parent.clientTop;
        parent = parent.offsetParent;
      }
      this.top = this.top;
    }
  };

  getDocumentscrollLeft = () => {
    if (document.compatMode == "BackCompat") {
      this.docScrollLeft = document.body.scrollLeft;
    } else {
      this.docScrollLeft = document.documentElement.scrollLeft;
    }
  };

  getDocumentscrollTop = () => {
    if (document.compatMode == "BackCompat") {
      this.docScrollTop = document.body.scrollTop;
    } else {
      this.docScrollTop = document.documentElement.scrollTop;
    }
  };
}
