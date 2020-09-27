export function getScrollParent(node) {
  if (node == null) return null;
  if (node.nodeName === "HTML") return window;

  const { scrollHeight, clientHeight } = node;
  const overflowRegex = /(auto|scroll)/;
  const { overflow, overflowX, overflowY } = window.getComputedStyle(
    node,
    false
  );
  if (
    (scrollHeight > clientHeight ||
      (scrollHeight === 0 && clientHeight === 0)) &&
    overflowRegex.test(overflow + overflowY + overflowX)
  ) {
    return node;
  }
  return getScrollParent(node.parentNode);
}

export function fireEvent(node, eventName) {
  // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
  let doc;
  if (node.ownerDocument) {
    doc = node.ownerDocument;
  } else if (node.nodeType === 9) {
    // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
    doc = node;
  } else {
    throw new Error(`Invalid node passed to fireEvent: ${node.id}`);
  }

  if (node.dispatchEvent) {
    // Gecko-style approach (now the standard) takes more work
    let eventClass = "";

    // Different events have different event classes.
    // If this switch statement can't map an eventName to an eventClass,
    // the event firing is going to fail.
    switch (eventName) {
      case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
      case "mousedown":
      case "mouseup":
        eventClass = "MouseEvents";
        break;

      case "focus":
      case "change":
      case "blur":
      case "select":
        eventClass = "HTMLEvents";
        break;

      default:
        throw new Error(
          `fireEvent: Couldn't find an event class for event '${eventName}'.`
        );
    }

    const event = doc.createEvent(eventClass);
    event.initEvent(eventName, true, true); // All events created as bubbling and cancelable.

    event.synthetic = true; // allow detection of synthetic events
    // The second parameter says go ahead with the default action
    node.dispatchEvent(event, true);
  } else if (node.fireEvent) {
    // IE-old school style, you can drop this if you don't need to support IE8 and lower
    const event = doc.createEventObject();
    event.synthetic = true; // allow detection of synthetic events
    node.fireEvent(`on${eventName}`, event);
  }
}
