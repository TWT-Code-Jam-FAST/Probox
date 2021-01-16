let cssAnimation;
let keyFramesBrowserPrefixes = ["-webkit-", "-o-", "-moz-", ""];
let skylighterElements = ["skylight1", "skylight2", "skylight3"];

for (let i in keyFramesBrowserPrefixes) {
  cssAnimation =
    "@" +
    keyFramesBrowserPrefixes[i] +
    "keyframes swing {" +
    "20% {" +
    keyFramesBrowserPrefixes[i] +
    "transform: rotate(15deg);}" +
    "40% {" +
    keyFramesBrowserPrefixes[i] +
    "transform: rotate(-10deg);}" +
    "60% {" +
    keyFramesBrowserPrefixes[i] +
    "transform: rotate(5deg);}" +
    "80% {" +
    keyFramesBrowserPrefixes[i] +
    "transform: rotate(-5deg);}" +
    "100% {" +
    keyFramesBrowserPrefixes[i] +
    "transform: rotate(0deg); }}";
  cssAnimation = document.createTextNode(cssAnimation);
  document.getElementsByTagName("style")[0].appendChild(cssAnimation);
}

for (let j of skylighterElements) {
  cssAnimation =
    "#" +
    j +
    "{" +
    " -webkit-transform-origin: top center;" +
    "-moz-transform-origin: top center;" +
    "-ms-transform-origin: top center;" +
    "-o-transform-origin: top center;" +
    "transform-origin: top center;" +
    "-webkit-animation-name: swing;" +
    "-moz-animation-name: swing;" +
    "-ms-animation-name: swing;" +
    "-o-animation-name: swing;" +
    "animation-name: swing;" +
    "-webkit-animation-delay: 1s;" +
    "-moz-animation-delay: 1s;" +
    "-ms-animation-delay: 1s;" +
    "-o-animation-delay: 1s;" +
    "animation-delay: 1s;" +
    "-webkit-animation-duration: 1s;" +
    "-moz-animation-duration: 1s;" +
    "-ms-animation-duration: 1s;" +
    "-o-animation-duration: 1s;" +
    "animation-duration: 1s;}";

  cssAnimation = document.createTextNode(cssAnimation);
  document.getElementsByTagName("style")[0].appendChild(cssAnimation);
}
