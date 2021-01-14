class Navbar extends HTMLElement {
  constructor() {
    super();
    this.current = this.getAttribute("current");
  }

  getActive(i) {
    return this.current === i ? "active" : "";
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-light navbar-expand-md navigation-clean" style="background: rgb(255,191,132);">
        <div class="container"><a class="navbar-brand" href="${
          window.location.origin
        }">Probox</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link ${this.getActive(
                      "0"
                    )}" href="${
      window.location.origin
    }/regex.html">Regex</a></li>
                    <li class="nav-item"><a class="nav-link ${this.getActive(
                      "1"
                    )}" href="${
      window.location.origin
    }/stackoverflow.html">Stack Overflow</a></li>
                    <li class="nav-item"><a class="nav-link ${this.getActive(
                      "2"
                    )}" href="#">Third Item</a></li>
                    <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                        <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["current"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.current = newValue;
    this.render();
  }
}

customElements.define("my-navbar", Navbar);
