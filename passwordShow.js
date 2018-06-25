class passwordView {
			constructor(passwordElement) {
				this.password = document.getElementById(passwordElement);
				this.showElement = document.createElement("SPAN");
				this.showElement.className = "show";
				this.showElement.innerHTML = "show password";
				this.password.insertAdjacentElement('beforebegin',this.showElement); 
				this.showHide();
			}
			show() { this.password.setAttribute('type', 'text'); }
			hide() { this.password.setAttribute('type', 'password'); }
			showHide() {
				var visible = 0;
				var t = this;
				this.showElement.addEventListener("click", function() {
					if (visible == 0) { visible = 1; t.show();
					} else { visible = 0; t.hide(); }
				}, false);
			}
		}
