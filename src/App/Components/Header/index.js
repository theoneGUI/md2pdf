import React from "react";
import styled from "styled-components";
import UploadButton from "./Upload.js";
const Header = ({ className }) => {
  const onTransform = () => {
    // get the file name
    let candidateTitle = "";
    const previewEl = document.querySelector(".preview");
    const candidateTitleEl = previewEl.querySelector("h1");
    if (candidateTitleEl) {
      candidateTitle = candidateTitleEl.innerText;

      // do the effect change the title
      const currentTitle = document.title;
      document.title = candidateTitle;
      window.requestAnimationFrame(() => {
        // schedule resume back in next frame
        document.title = currentTitle;
      });
    }
    else {
      const PDFName = prompt("Enter a name for the PDF file:");
      const currentTitle = document.title;
      document.title = PDFName;
      window.requestAnimationFrame(() => {
        document.title = currentTitle;
      });
    }
    window.print();
  };

  const onSaveToBrowser = () => {
    const pureMD2 = document.querySelector('.CodeMirror-code').innerText.split('\n').map((el, index) => (index % 2 !== 0 ? el : undefined)).filter((el) => el !== undefined && el !== null).join('\n').replaceAll('\u200b', '');  // you don't have to understand what's going on
    localStorage.setItem("storedfile", pureMD2);
  };

  return (
    <header className={className + " no-print"}>
      <p className="project"> md2pdf </p>
      <div className="menu">
        <UploadButton className="button upload" />
        <p className="button download" onClick={onTransform}>
          <span role="img" aria-label="download">
            🎉
          </span>
          <span>Export as PDF</span>
        </p>
        <p className="button download" onClick={onSaveToBrowser}>
          <span>Save File</span>
        </p>
      </div>
      {/* <span className="author">Powered by @realdennis</span> */}
    </header>
  );
};

export default styled(Header)`
  * {
    box-sizing: border-box;
  }
  flex-shrink: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  user-select: none;
  padding-left: 5px;
  padding-right: 5px;
  color: black;
  background-color: rgb(233, 233, 233);
  display: flex;
  align-items: center;
  height: 40px;
  .project {
    font-weight: bold;
    margin: 5px;
    flex-shrink: 0;
    height: 20px;
  }
  div.menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .button {
      height: 80%;
      margin: 0;
      display: flex;
      align-items: center;
      margin-left: 3px;
      border-radius: 3px;
      border: 1px solid black;
      padding: 10px;
      cursor: pointer;
    }
  }

  /* span.author {
    position: fixed;
    bottom: 2px;
    left: 2px;
    opacity: 0.5;
    color: white;
    height: 20px;
    z-index:99;
  } */
  @keyframes dance {
    0% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-2deg);
    }
  }
`;
