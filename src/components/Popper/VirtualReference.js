class VirtualReference {
  constructor(x, y, scrollParent) {
    const update = e => this.updateRect(e);

    this.rect = {
      top: y,
      left: x,
      bottom: y + 1,
      right: x + 1,
      width: 1,
      height: 1,
    };
    this.scrollParent = scrollParent;
    this.originY = y;
    this.originX = x;
    this.originScrollX = scrollParent.scrollX;
    this.originScrollY = scrollParent.scrollY;

    scrollParent.addEventListener('scroll', update);
    this.destroy = () => {
      scrollParent.removeEventListener('scroll', update);
    };
  }

  updateRect() {
    const offsetY = this.scrollParent.scrollY - this.originScrollY;
    const offsetX = this.scrollParent.scrollX - this.originScrollX;
    this.rect.top = this.originY - offsetY;
    this.rect.bottom = this.originY - offsetY + 1;
    this.rect.left = this.originX - offsetX;
    this.rect.right = this.originX - offsetX + 1;
    this.rectChangedCallback(this.rect);
  }

  getBoundingClientRect() {
    return this.rect;
  }

  get clientWidth() {
    return this.getBoundingClientRect().width;
  }

  get clientHeight() {
    return this.getBoundingClientRect().height;
  }
}

export default VirtualReference;
