@import "rsuite/dist/rsuite.css";
* {
  box-sizing: border-box;
}

body {
  background-image: linear-gradient(white, white, black);
  background-repeat: no-repeat;
  height: 100%;
  margin: 0;
  background-attachment: fixed;
  font-family: "comic sans MS", curisve, sans-serif;
}

header ul {
  list-style-type: none;
  margin-top: 2vw;
  float: right;
}
header ul a {
  position: relative;
  text-decoration: none;
}
header ul a:hover {
  text-decoration: none;
}
header ul a::before {
  content: "";
  position: absolute;
  display: block;
  width: 60%;
  height: 0.3vw;
  bottom: -0.5vw;
  left: 0;
  background-color: #000;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
header ul a:hover::before {
  transform: scaleX(1);
}
header ul li {
  color: black;
  display: inline;
  margin: 0 auto;
  margin-right: 3vw;
  font-size: 1.3em;
  font-family: "lucida console";
}

section {
  display: flex;
  flex-wrap: row;
  font-family: "comic sans MS", curisve, sans-serif;
}
section div {
  position: relative;
  flex-grow: 1;
  flex-basis: 20;
}
section h4 {
  margin: 20vw 10vw;
  white-space: nowrap;
}
section img {
  margin-left: -12vw;
  margin-top: 10vw;
  width: 30vw;
}

article {
  display: flex;
}
article h4 {
  margin-left: 5vw;
}
article div {
  margin: 7vw;
  padding: 5vw;
  background-color: white;
}
article div li {
  font-size: 1.2em;
}

.c {
  display: grid;
  gap: 5px;
  grid-template-columns: auto auto auto;
  margin-left: 5vw;
}
.c .projectContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.c .projectContainer .overlay {
  width: 15vw;
  position: absolute;
  padding: 15px;
  inset: 0 4.5vw 0 4.5vw;
  background-color: white;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  padding: 1.7vw 1vw;
  font-size: 1em;
}
.c .projectContainer .overlay:hover {
  opacity: 0.9;
}
.c .projectContainer .overlay a {
  color: black;
}

.project {
  background-image: url("thickline.svg");
  background-repeat: no-repeat;
}
.project h4 {
  margin-left: 5vw;
  color: #00b3b3;
}
.project .row div:first-child {
  grid-row: 1/span 2;
}
.project .row div img {
  float: left;
  width: 70%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

.rs-btn {
  margin-top: -0.4vw;
  background-color: transparent;
  border: none;
  font-size: 1em;
}

/*# sourceMappingURL=style.cs.map */
