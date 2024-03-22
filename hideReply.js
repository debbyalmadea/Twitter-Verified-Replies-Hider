(function () {
  window.onscroll = function (e) {
    hideVerifiedReply();
  };

  function isVerifiedAcc(reply) {
    const svg = reply.querySelector("svg[aria-label='Verified account']");
    return !!svg;
  }

  function getUsername(reply) {
    const usernameContainer = reply.querySelector(
      '[class="css-175oi2r r-18u37iz r-1wbh5a2 r-13hce6t"]'
    );

    if (usernameContainer) {
      return usernameContainer.querySelector("a").innerText;
    }

    return null;
  }

  function hideReply(reply) {
    reply.style.display = "none";
  }

  function hideVerifiedReply() {
    const statusContainer = document.querySelector(
      '[aria-label="Timeline: Conversation"]'
    )?.firstElementChild;

    const url = window.location.href;
    const mainUsername = RegExp(/twitter.com\/(.*)\/status/).exec(url)[1];

    if (statusContainer) {
      for (let child of statusContainer.children) {
        const username = getUsername(child);
        if (child.style.transform !== "translateY(0px)") {
          if (username && isVerifiedAcc(child) && username !== mainUsername) {
            hideReply(child);
          }
        }
      }
    }
  }
})();
